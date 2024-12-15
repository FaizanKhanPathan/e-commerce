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
import { useNavigate, useParams } from 'react-router-dom';

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
    const navigate = useNavigate()
    const { user, isAuthenticated } = useSelector((state) => state.auth);
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
    return (
        <>
            <div className="flex flex-col justify-center lg:flex-row gap-12 sm:gap-12 items-start px-4 sm:px-6 py-6 sm:py-12 h-auto lg:h-[470px] border-b">
                <div className="w-full xl:w-[30%] flex justify-center">
                    <img
                        src={productDetails?.image}
                        className="w-full sm:w-[400px] max-w-xs sm:max-w-none h-64 sm:h-96 object-contain"
                        alt=""
                    />
                </div>
                <div className="flex flex-col justify-between h-auto sm:h-full w-full xl:w-[70%]">
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-extrabold">{productDetails?.title}</h1>
                        <p className="text-sm sm:text-md text-muted-foreground mb-4 sm:mb-5 mt-2 tracking-tight leading-6">
                            {productDetails?.description}
                        </p>
                    </div>
                    <div>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0">
                            <p className="text-xl sm:text-2xl font-semibold">$ {productDetails?.salePrice}</p>
                            {productDetails?.totalStock > 0 ? (
                                <p className="text-sm sm:text-md font-semibold">Available: {productDetails?.totalStock} Left</p>
                            ) : (
                                <p className="text-sm sm:text-md font-semibold">Out of stock</p>
                            )}
                        </div>
                        <div className="mt-4 sm:mt-5">
                            <Button
                                className="w-full sm:w-96 h-12"
                                onClick={() => handleAddtoCart(productDetails?._id)}
                            >
                                {isAuthenticated ? "Add to cart" : "Sign in"}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <section className="py-6 sm:py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 uppercase">
                            Recommended Products
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                            {productList && productList.length > 0
                                ? productList.slice(0, 4)?.map((productItem) => (
                                    <ShoppingProductTile
                                        key={productItem.id}
                                        handleGetProductDetails={handleGetProductDetails}
                                        product={productItem}
                                        handleAddtoCart={handleAddtoCart}
                                    />
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