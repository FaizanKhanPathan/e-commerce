import React from 'react'
import { Button } from '../ui/button'
import { FaShoppingCart } from "react-icons/fa";
import { addToCart, fetchCartItems } from '@/store/shop/cart-slice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from '../ui/use-toast';
import { useNavigate } from 'react-router-dom';
import { CgLogIn } from "react-icons/cg";



const SearchResults = ({ searchResults, keyword, setKeyword }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { user } = useSelector((state) => state.auth);



    function handleAddtoCart(getCurrentProductId) {
        if (user) {
            dispatch(
                addToCart({
                    userId: user?.id,
                    productId: getCurrentProductId,
                    quantity: 1,
                })
            ).then((data) => {
                if (data?.payload?.success) {
                    dispatch(fetchCartItems(user?.id));
                    toast({
                        title: "Product is added to cart",
                    });
                }
            });
        } else {
            navigate("/auth/login")
        }
    }

    console.log("searchResults", searchResults)

    return (
        <div>
            {
                keyword && <>
                    <div className={`absolute z-[99] ${searchResults?.length > 4 && "h-96"}`}>
                        <div className="relative h-full">
                            <div className="overflow-y-auto h-full pb-8">
                                {searchResults?.map((response, index) => (
                                    <div
                                        key={index}
                                        className="hover:bg-slate-200 flex bg-white py-5 px-3 gap-2 border-b justify-between"
                                    >
                                        <div className="flex justify-start gap-2 cursor-pointer">
                                            <div>
                                                <img
                                                    src={response?.image}
                                                    className="border object-contain w-14 h-14"
                                                    alt=""
                                                />
                                            </div>
                                            <div>
                                                <h1 className="font-semibold">{response?.title}</h1>
                                                <p className='mt-1 font-semibold'>Brand: {response?.brand}</p>
                                                <p className='mt-1 font-semibold'>Category: {response?.category}</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-between">
                                            <p className="font-semibold text-nowrap">
                                                $ {response?.salePrice}
                                            </p>
                                            <Button onClick={() => handleAddtoCart(response?._id)}>
                                                {
                                                    user ? <>
                                                        <FaShoppingCart />
                                                    </> : <>
                                                        <CgLogIn className='text-xl' />
                                                    </>
                                                }
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {
                                searchResults?.length > 0 && <>
                                    <div className="font-semibold absolute bottom-0 left-0 w-full bg-white border p-2 cursor-pointer text-center" onClick={() => { setKeyword(""); navigate(`search?keyword=${keyword}`) }}>
                                        View all {searchResults?.length} results
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                </>
            }
        </div>

    )
}

export default SearchResults