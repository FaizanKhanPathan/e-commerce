import StarRatingComponent from '@/components/common/star-rating';
import ShoppingProductTile from '@/components/shopping-view/product-tile';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { addToCart, fetchCartItems } from '@/store/shop/cart-slice';
import { fetchAllFilteredProducts, fetchProductDetails, setProductDetails } from '@/store/shop/products-slice';
import { getReviews } from '@/store/shop/review-slice';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ProductDetails = ({ }) => {

    // const [productDetails, setProductDetails] = useState({})
    const [reviewMsg, setReviewMsg] = useState("");
    const [rating, setRating] = useState(0);
    const { id: productId } = useParams()

    const { productList } = useSelector(
        (state) => state.shopProducts
    );

    const isTypeChange = useSelector((state) => state?.shopProducts?.isTypeChange)

    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const { cartItems } = useSelector((state) => state.shopCart);
    const { reviews } = useSelector((state) => state.shopReview);
    const productDetails = useSelector((state) => state?.shopProducts?.productDetails)



    const { toast } = useToast();

    // function handleAddToCart(getCurrentProductId, getTotalStock) {
    //     let getCartItems = cartItems.items || [];

    //     if (getCartItems.length) {
    //         const indexOfCurrentItem = getCartItems.findIndex(
    //             (item) => item.productId === getCurrentProductId
    //         );
    //         if (indexOfCurrentItem > -1) {
    //             const getQuantity = getCartItems[indexOfCurrentItem].quantity;
    //             if (getQuantity + 1 > getTotalStock) {
    //                 toast({
    //                     title: `Only ${getQuantity} quantity can be added for this item`,
    //                     variant: "destructive",
    //                 });

    //                 return;
    //             }
    //         }
    //     }
    //     dispatch(
    //         addToCart({
    //             userId: user?.id,
    //             productId: getCurrentProductId,
    //             quantity: 1,
    //         })
    //     ).then((data) => {
    //         if (data?.payload?.success) {
    //             dispatch(fetchCartItems(user?.id));
    //             toast({
    //                 title: "Product is added to cart",
    //             });
    //         }
    //     });
    // }

    function handleAddReview() {
        dispatch(
            addReview({
                productId: productDetails?._id,
                userId: user?.id,
                userName: user?.userName,
                reviewMessage: reviewMsg,
                reviewValue: rating,
            })
        ).then((data) => {
            if (data.payload.success) {
                setRating(0);
                setReviewMsg("");
                dispatch(getReviews(productDetails?._id));
                toast({
                    title: "Review added successfully!",
                });
            }
        });
    }

    useEffect(() => {
        dispatch(fetchProductDetails(productId))
    }, [productId])

    useEffect(() => {
        dispatch(
          fetchAllFilteredProducts({
            filterParams: {},
            sortParams: "price-lowtohigh",
            type: isTypeChange,
          })
        );
      }, [dispatch, isTypeChange]);

    // useEffect(() => {
    //     if (productDetails !== null) dispatch(getReviews(productDetails?._id));
    // }, [productDetails]);

    const averageReview =
        reviews && reviews.length > 0
            ? reviews.reduce((sum, reviewItem) => sum + reviewItem.reviewValue, 0) /
            reviews.length
            : 0;


    function handleGetProductDetails(getCurrentProductId) {
        dispatch(fetchProductDetails(getCurrentProductId));
    }

    function handleAddtoCart(getCurrentProductId) {
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
    }
    return (
        <>
            <div className='flex justify-start gap-12 items-start px-6 py-12 h-[470px] border-b'>
                <div className='w-[30%]'>
                    <img src={productDetails?.image} className='w-[400px] h-96 object-contain ' alt="" />
                </div>
                <div className='flex justify-between flex-col h-full w-[70%]'>
                    <div>
                        <h1 className="text-3xl font-extrabold">{productDetails?.title}</h1>
                        <p className="text-muted-foreground text-lg mb-5 mt-2 tracking-tight">
                            {productDetails?.description}
                        </p>
                    </div>
                    <div>
                        <div className='flex justify-between items-center'>
                            <p className='text-2xl font-semibold'>$ {productDetails?.salePrice}</p>
                            {
                                productDetails?.totalStock > 0 ? <>
                                    <p className='text-md font-semibold'>Available: {productDetails?.totalStock}Left</p>
                                </> : <>
                                    <p className='text-md font-semibold'>Out of stock</p>
                                </>
                            }
                        </div>
                        <div className='mt-5'>
                            <Button className="w-96 h-12" onClick={() => handleAddtoCart(productDetails?._id)}>Add to cart</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <section className="py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold text-center mb-8 uppercase">
                            Recommended Products
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {productList && productList.length > 0
                                ? productList.slice(0, 4)?.map((productItem) => (
                                    <ShoppingProductTile
                                        handleGetProductDetails={handleGetProductDetails}
                                        product={productItem}
                                        handleAddtoCart={handleAddtoCart} />
                                ))
                                : null}
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default ProductDetails