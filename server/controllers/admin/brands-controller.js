const Brand = require("../../models/Brand");
const Category = require("../../models/Category");
const SubCategory = require("../../models/SubCategory");



// Brands
const addBrand = async (req, res) => {
    try {
        const {
            image_url,
            brand_name
        } = req.body;

        const newlyCreatedBrand = new Brand({
            image_url,
            brand_name
        });

        await newlyCreatedBrand.save();

        res.status(201).json({
            success: true,
            data: newlyCreatedBrand,
        });

    } catch (error) {
        console.log("error", error)
        res.status(500).json({
            success: false,
            message: "Error occured",
        });
    }
}
const getBrands = async (req, res) => {
    try {
        const getAllBrands = await Brand.find({})
        // console.log("getAllBrands",getAllBrands)
        res.status(200).json({
            success: true,
            data: getAllBrands,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Error occured",
        });
    }
}



// Category
const addCategory = async (req, res) => {
    try {
        const {
            category_name,
            brand_id
        } = req.body;

        const newlyCreatedCategory = new Category({
            category_name,
            brand_id
        });

        await newlyCreatedCategory.save();

        res.status(201).json({
            success: true,
            data: newlyCreatedCategory,
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Error occured",
        });
    }
}


const getCategories = async (req, res) => {
    try {

        const { brand_id } = req.query

        const query = brand_id ? { brand_id } : {};
        const getAllCategories = await Category.find(query).populate("brand_id", "brand_name").sort({ createdAt: -1 });;

        const data = getAllCategories.filter((ele)=> ele?.brand_id).map(item => ({
            brand_id:item.brand_id._id.toString(),
            category_id: item._id.toString(), // Assuming you want to use the sub-category's ID as the category_id
            category_name: item.category_name
        }));


        res.status(200).json({
            success: true,
            data: data,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Error occured",
        });
    }
}


// Sub Category
const addSubCategory = async (req, res) => {
    try {
        const { sub_category_name, category_id, brand_id } = req.body

        const newlyCreatedSubCategory = new SubCategory({
            sub_category_name,
            category_id,
            brand_id
        });

        await newlyCreatedSubCategory.save();

        res.status(201).json({
            success: true,
            data: newlyCreatedSubCategory,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error occured",
        });
    }
}

const getSubCategory = async (req, res) => {
    try {
        // Extract category_id from the request parameters
        const { category_id } = req.query;

        // Fetch subcategories, optionally filtering by category_id
        const query = category_id ? { category_id } : {};
        const getAllSubCategories = await SubCategory.find(query).populate(["brand_id", "category_id"]).sort({ createdAt: -1 });;

        // console.log("getAllSubCategories", getAllSubCategories);
        
        // Transform the data into the desired format
        const data = [];

        getAllSubCategories.forEach(item => {
            const brand = item.brand_id.brand_name;
            const brandId = item.brand_id._id.toString();
            const categoryId = item.category_id._id.toString();
            const subCategoryName = item.sub_category_name;
            const subCategoryId = item._id.toString();

            // Create the category object for the response
            data.push({
                category_id: categoryId,
                sub_category_id: subCategoryId,
                sub_category_name: subCategoryName,
            });
        });

        res.status(200).json({
            success: true,
            data: data,
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};


const getAllCategoryMenu = async (req, res) => {
    try {
        const getAllSubCategories = await SubCategory.find().populate(["brand_id", "category_id"]).sort({ createdAt: -1 });
        // Transform the data into the desired format

        const data = [];

        getAllSubCategories.forEach(item => {
            const brand = item.brand_id.brand_name;
            const brandId = item.brand_id._id.toString();
            const categoryId = item.category_id._id.toString();
            const categoryName = item.category_id.category_name;
            const subCategoryName = item.sub_category_name;
            const subCategoryId = item._id.toString();

            // Find or create the brand object in the data array
            let brandEntry = data.find(b => b.brand_id === brandId);
            if (!brandEntry) {
                brandEntry = {
                    brand_name: brand,
                    brand_id: brandId,
                    category: [],
                };
                data.push(brandEntry);
            }

            // Find or create the category object in the brand's category array
            let categoryEntry = brandEntry.category.find(c => c.category_id === categoryId);
            if (!categoryEntry) {
                categoryEntry = {
                    category_name: categoryName,
                    category_id: categoryId,
                    sub_category: [],
                };
                brandEntry.category.push(categoryEntry);
            }

            // Add the sub-category to the category's sub-category array
            categoryEntry.sub_category.push({
                sub_category_name: subCategoryName,
                sub_category_id: subCategoryId,
            });
        });

        res.status(200).json({
            success: true,
            data: data,
        });

    } catch (err) {

    }
}




module.exports = {
    addBrand,
    getBrands,

    addCategory,
    getCategories,

    addSubCategory,
    getSubCategory,

    getAllCategoryMenu
};