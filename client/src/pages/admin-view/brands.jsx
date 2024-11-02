import ProductImageUpload from "@/components/admin-view/image-upload"
import { addBrand, getAllBrands } from "@/store/admin/brand-slice"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const AdminBrands = () => {
    const dispatch = useDispatch()

    const [value, setValue] = useState("")
    const [uploadedImageUrl, setUploadedImageUrl] = useState("")

    const getBrands = useSelector((state) => state?.adminBrands?.brandList)


    useEffect(() => {
        dispatch(getAllBrands());
    }, [dispatch]);


    const handleSubmit = () => {
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

    return (
        <>
            <>
                <h1 className="text-2xl font-semibold underline">Brands</h1>
                <div className="flex justify-start items-start gap-5 border-b border-black pb-5">
                    <div className="flex flex-col gap-3">
                        <ProductImageUpload setUploadedImageUrl={setUploadedImageUrl} />
                        <label>Brand name</label>
                        <input type="text" onChange={(e) => setValue(e.target.value)} className="border py-1 w-full outline-none pl-4" />
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

            <>
                <h1 className="text-2xl font-semibold underline mt-3">Categories</h1>
                <div className="flex justify-start items-start gap-5 border-b border-black pb-5">
                    <div className="flex flex-col gap-3">
                        <ProductImageUpload setUploadedImageUrl={setUploadedImageUrl} />
                        <label>Brand name</label>
                        <input type="text" onChange={(e) => setValue(e.target.value)} className="border py-1 w-full outline-none pl-4" />
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