const Product = require("../../models/Product");

const getFilteredProducts = async (req, res) => {
  try {
    const { category = [], brand = [], sortBy = "price-lowtohigh", type = "1" } = req.query;

    let filters = {};

    filters.type = type
    if (category.length) {
      filters.category = { $in: category.split(",") };
    }

    if (brand.length) {
      filters.brand = { $in: brand.split(",") };
    }

    let sort = {};

    switch (sortBy) {
      case "price-lowtohigh":
        sort.price = 1;

        break;
      case "price-hightolow":
        sort.price = -1;

        break;
      case "title-atoz":
        sort.title = 1;

        break;

      case "title-ztoa":
        sort.title = -1;

        break;

      default:
        sort.price = 1;
        break;
    }

    const products = await Product.find(filters).sort(sort);

    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }
};

const getProductDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);

    if (!product)
      return res.status(404).json({
        success: false,
        message: "Product not found!",
      });

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (e) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }
};

const getSellerAndFeatureProduct = async (req, res) => {
  try {
    // Create an empty filter object
    const features = 'true'
    const bestSellers = 'true'
    const featureProducts = await Product.find({ features });
    const sellersProducts = await Product.find({ bestSellers });
    const combinedProducts = [...featureProducts, ...sellersProducts]

    // Remove duplicates based on _id using reduce and Map
    const uniqueProducts = Array.from(
      combinedProducts.reduce((map, product) => map.set(product._id.toString(), product), new Map()).values()
    );

    res.status(200).json({
      success: true,
      data: uniqueProducts,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }
}

module.exports = { getFilteredProducts, getProductDetails, getSellerAndFeatureProduct };
