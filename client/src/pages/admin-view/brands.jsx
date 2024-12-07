import ProductImageUpload from "@/components/admin-view/image-upload"
import { addBrand, addCategory, addSubCategory, getAllBrands, getCategoryData, getSubCategoryData, updateBrand } from "@/store/admin/brand-slice"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const AdminBrands = () => {
    const dispatch = useDispatch()

    const [isEditValue, setIsEditValue] = useState(false)
    const [updateBrandId, setUpdateBrandId] = useState("")
    const [value, setValue] = useState("")
    const [uploadedImageUrl, setUploadedImageUrl] = useState("")

    const [categoryValue, setCategoryValue] = useState("")
    const [selectedCategoryId, setSelectedCategoryId] = useState("")


    const [subCategoryValue, setSubCategoryValue] = useState("")
    const [selectedSubCategoryBrand, setSelectedSubCategoryBrand] = useState("")
    const [selectedSubCategoryCategoryId, setSelectedSubCategoryCategoryId] = useState("")

    const getBrands = useSelector((state) => state?.adminBrands?.brandList)
    const categoryList = useSelector((state) => state?.adminBrands?.categoryList)
    const subCategoryList = useSelector((state) => state?.adminBrands?.subCategoryList)

    // console.log("categoryList>>>>",categoryList)


    useEffect(() => {
        dispatch(getAllBrands());
        dispatch(getCategoryData());
        dispatch(getSubCategoryData());

    }, [dispatch]);


    const handleSubmit = () => {
        if (isEditValue) {
            const body = {
                brand_id: updateBrandId,
                image_url: uploadedImageUrl,
                brand_name: value
            }

            try {
                dispatch(updateBrand(body)).then((data) => {
                    if (data?.payload?.success) {
                        dispatch(getAllBrands());
                    }
                })
            } catch (err) {

            }

            console.log("body>>>>>", body)
        } else {
            const body = {
                image_url: uploadedImageUrl,
                brand_name: value
            }
            try {
                dispatch(addBrand(body)).then((data) => {
                    if (data?.payload?.success) {
                        dispatch(getAllBrands());
                    }
                })
            } catch (err) {

            }
        }
    }
    const handleCategorySubmit = () => {
        const body = {
            category_name: categoryValue,
            brand_id: selectedCategoryId
        }
        try {
            dispatch(addCategory(body)).then((data) => {
                if (data?.payload?.success) {
                    dispatch(getCategoryData());
                    setCategoryValue("")
                    setSelectedCategoryId("")
                }
            })
        } catch (err) {

        }

    }

    const handleSubCategorySubmit = () => {
        const body = {
            brand_id: selectedSubCategoryBrand,
            category_id: selectedSubCategoryCategoryId,
            sub_category_name: subCategoryValue
        }

        try {
            dispatch(addSubCategory(body)).then((data) => {
                if (data?.payload?.success) {
                    dispatch(getSubCategoryData());
                    // setSubCategoryValue("")
                    // setSelectedSubCategoryCategoryId("")
                    // setSelectedSubCategoryBrand("")
                }
            })
        } catch (err) {

        }
        // addSubCategory()
    }



    const handleEditBrand = (data) => {
        setValue(data?.brand_name)
        setUpdateBrandId(data?._id)
        setUploadedImageUrl(data?.image_url)
        setIsEditValue(true)
    }


    console.log("uploadedImageUrl", uploadedImageUrl)

    return (
        <>
            <>
                <h1 className="text-2xl font-semibold underline">Brands</h1>
                <div className="flex justify-start items-start gap-5 border-b border-black pb-5">
                    <div className="flex flex-col gap-3">
                        <ProductImageUpload setUploadedImageUrl={setUploadedImageUrl} uploadedImageUrl={uploadedImageUrl} />
                        <label>Brand name</label>
                        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="border py-1 w-full outline-none pl-4" />
                        <button className="border border-black" onClick={handleSubmit}>Submit</button>
                    </div>
                    <div className="mt-4">
                        <h2 className="font-bold text-lg mb-2">
                            Brands information
                        </h2>
                        <table className="border border-collapse bg-white ">
                            <thead>
                                <tr className="border border-black">
                                    <th className="px-3 py-3">Sr. no</th>
                                    <th className="px-3">Brand name</th>
                                    <th className="px-3">Brand image</th>
                                    <th className="px-3">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    getBrands?.map((ele, index) => {
                                        return (
                                            <tr className="border border-black">
                                                <td className="px-3 py-2">{index + 1}</td>
                                                <td className="px-3"><img src={ele?.image_url} className="h-7" /></td>
                                                <td className="px-3">{ele?.brand_name}</td>
                                                <td className="px-3 cursor-pointer" onClick={() => handleEditBrand(ele)}>Edit</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </>

            <>
                <h1 className="text-2xl font-semibold underline mt-3">Categories</h1>
                <div className="flex justify-start items-start gap-5 border-b border-black pb-5">
                    <div className="flex flex-col gap-3 mt-7 w-80">
                        {/* <ProductImageUpload setUploadedImageUrl={setUploadedImageUrl} /> */}
                        <label>Select Brand</label>
                        <select value={selectedCategoryId} className="p-2 border border-black outline-none" onChange={(e) => setSelectedCategoryId(e.target.value)}>
                            {
                                getBrands?.map((ele) => (
                                    <option value={ele?._id}>{ele?.brand_name}</option>
                                ))
                            }
                        </select>

                        <label htmlFor="">Category Name</label>
                        <input value={categoryValue} type="text" onChange={(e) => setCategoryValue(e.target.value)} className="border py-1 w-full outline-none pl-4" />
                        <button className="border border-black" onClick={handleCategorySubmit}>Submit</button>
                    </div>
                    <div className="mt-4">
                        <h2 className="font-bold text-lg mb-2">
                            Brands information
                        </h2>
                        <div className="h-96 overflow-scroll relative">
                            <table className="border border-collapse bg-white overflow-scroll">
                                <thead className="top-0 bg-white border">
                                    <tr className="border border-black">
                                        <th className="px-3 py-3">Sr. no</th>
                                        <th className="px-3">Brand name</th>
                                        {/* <th className="px-3">Brand image</th> */}
                                        <th className="px-3">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        categoryList?.map((ele, index) => {
                                            return (
                                                <tr className="border border-black">
                                                    <td className="px-3 py-2">{index + 1}</td>
                                                    {/* <td className="px-3"><img src={ele?.image_url} className="h-7" /></td> */}
                                                    <td className="px-3">{ele?.category_name}</td>
                                                    <td className="px-3">Edit</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>


            <>
                <h1 className="text-2xl font-semibold underline mt-3">Sub Categories</h1>
                <div className="flex justify-start items-start gap-5 border-b border-black pb-5">
                    <div className="flex flex-col gap-3 mt-6">

                        <label htmlFor="">Select Brand</label>
                        <select className="p-2 border border-black outline-none" onChange={(e) => setSelectedSubCategoryBrand(e.target.value)}>
                            {
                                getBrands?.map((ele) => (
                                    <option value={ele?._id}>{ele?.brand_name}</option>
                                ))
                            }
                        </select>

                        <label htmlFor="">Select Category</label>
                        <select className="p-2 border border-black outline-none" onChange={(e) => setSelectedSubCategoryCategoryId(e.target.value)}>
                            {
                                categoryList?.map((ele) => (
                                    <option value={ele?.category_id}>{ele?.category_name}</option>
                                ))
                            }
                        </select>

                        <label>Sub Category name</label>
                        <input type="text" value={subCategoryValue} onChange={(e) => setSubCategoryValue(e.target.value)} className="border py-1 w-full outline-none pl-4" />
                        <button className="border border-black" onClick={handleSubCategorySubmit}>Submit</button>
                    </div>



                    <div className="h-96 overflow-scroll relative">
                        <table className="border border-collapse bg-white overflow-scroll">
                            <thead className="top-0 bg-white border">
                                <tr className="border border-black">
                                    <th className="px-3 py-3">Sr. no</th>
                                    <th className="px-3">Brand name</th>
                                    {/* <th className="px-3">Brand image</th> */}
                                    <th className="px-3">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    subCategoryList?.map((ele, index) => {
                                        return (
                                            <tr className="border border-black">
                                                <td className="px-3 py-2">{index + 1}</td>
                                                {/* <td className="px-3"><img src={ele?.image_url} className="h-7" /></td> */}
                                                <td className="px-3">{ele?.sub_category_name}</td>
                                                <td className="px-3">Edit</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        </>
    )
}

export default AdminBrands