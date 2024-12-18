import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { brandOptionsMap, categoryOptionsMap } from "@/config";
import { Badge } from "../ui/badge";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ShoppingProductTile({
  product,
  handleGetProductDetails,
  handleAddtoCart,
}) {
  const { user, isAuthenticated, isLoading } = useSelector(
    (state) => state.auth
  );
  // console.log("user>>>>>>>>",user)
  return (
    <Card className="w-full max-w-sm mx-auto flex flex-col justify-between">
      <div onClick={() => handleGetProductDetails(product?._id)}>
        <div className="relative">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full h-[230px] rounded-t-lg object-contain mt-4"
          />
          {product?.totalStock === 0 ? (
            <Badge className="text-[10px] absolute top-2 left-2 bg-red-500 hover:bg-red-600">
              Out Of Stock
            </Badge>
          ) : product?.totalStock < 10 ? (
            <Badge className="text-[10px] absolute top-2 left-2 bg-red-500 hover:bg-red-600">
              {`Only ${product?.totalStock} items left`}
            </Badge>
          ) : product?.salePrice > 0 ? (
            <Badge className="text-[10px] absolute top-2 left-2 bg-red-500 hover:bg-red-600">
              Sale
            </Badge>
          ) : null}
        </div>
        <CardContent className="p-4">
          <h2 className="text-[14px] font-bold mb-2 leading-tight">{product?.title}</h2>
          <div className="flex justify-start items-center mb-2">
            <span className="text-[12px] text-muted-foreground">
              {/* {categoryOptionsMap[product?.category]} */}
              {"Brand:"} {product?.brand}
            </span>
            <span className="text-[12px] text-muted-foreground">
              {" "} {brandOptionsMap[product?.brand]}
            </span>
          </div>
          <div className=" flex justify-between items-center mb-2">
            <span
              className={` ${product?.salePrice > 0 ? "line-through" : ""
                } text-lg font-semibold text-primary`}
            >
              ${product?.price}
            </span>
            {product?.salePrice > 0 ? (
              <span className="text-lg font-semibold text-primary">
                ${product?.salePrice}
              </span>
            ) : null}
          </div>
        </CardContent>
      </div>


      <CardFooter>
        {product?.totalStock === 0 ? (
          <Button className="w-full opacity-60 cursor-not-allowed">
            Out Of Stock
          </Button>
        ) : (
          <>
            {
              isAuthenticated ? <>
                <Button
                  onClick={() => handleAddtoCart(product?._id, product?.totalStock)}
                  className="w-full"
                >
                  {"Add to cart"}
                </Button>
              </> : <>
                  <Button
                    onClick={() => handleAddtoCart(product?._id, product?.totalStock)}
                    className="w-full"
                    >
                    <Link to={"/auth/login"}>
                    {"Sign in"}
                </Link>
                  </Button>
              </>
            }

          </>
        )}
      </CardFooter>
    </Card>
  );
}

export default ShoppingProductTile;
