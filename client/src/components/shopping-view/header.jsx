import { HousePlug, LogOut, Menu, ShoppingCart, UserCog } from "lucide-react";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { shoppingViewHeaderMenuItems } from "@/config";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { logoutUser } from "@/store/auth-slice";
import UserCartWrapper from "./cart-wrapper";
import { useEffect, useState } from "react";
import { fetchCartItems } from "@/store/shop/cart-slice";
import { Label } from "../ui/label";

function MenuItems() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const [isCategoryShow, setIsCategoryShow] = useState(false)
  const [isSubCategoryShow, setIsSubCategoryShow] = useState(false)

  const [selectedBrandId, setSelectedBrandId] = useState("")
  const [selectedCategoryId, setSelectedCategoryId] = useState("")

  const categoryList = useSelector((state) => state?.adminBrands?.allSubMenuList)

  function handleNavigate(getCurrentMenuItem) {
    sessionStorage.removeItem("filters");
    const currentFilter =
      getCurrentMenuItem.id !== "home" &&
        getCurrentMenuItem.id !== "products" &&
        getCurrentMenuItem.id !== "search"
        ? {
          category: [getCurrentMenuItem.id],
        }
        : null;

    sessionStorage.setItem("filters", JSON.stringify(currentFilter));

    location.pathname.includes("listing") && currentFilter !== null
      ? setSearchParams(
        new URLSearchParams(`?category=${getCurrentMenuItem.id}`)
      )
      : navigate(getCurrentMenuItem.path);
  }

  // console.log("categoryList>>>>>>>>>>>>", categoryList)

  return (
    <nav className="flex flex-col mt-5 overflow-auto lg:overflow-visible max-h-screen lg:max-h-full">
      {/* {shoppingViewHeaderMenuItems.map((menuItem) => (
        <Label
          onClick={() => handleNavigate(menuItem)}
          className="text-sm font-medium cursor-pointer"
          key={menuItem.id}
        >
          {menuItem.label}
        </Label>
      ))} */}


      <div className="flex flex-col mt-5">
        {
          categoryList?.map((ele) => {
            return (
              <div>
                <p onClick={() => selectedBrandId == "" ? setSelectedBrandId(ele?.brand_id) : setSelectedBrandId("")} className="py-2 border-b">
                  <span>
                    {ele?.brand_name}
                  </span>
                  <span>

                  </span>
                </p>
                {
                  selectedBrandId == ele?.brand_id && <>
                    {
                      ele?.category?.map((res) => {
                        return <>
                          <div className="ml-3">
                            <p onClick={() => selectedCategoryId == "" ? setSelectedCategoryId(res?.category_id) : setSelectedCategoryId("")} className="py-2 border-b">{res?.category_name}</p>
                            {
                              selectedCategoryId == res?.category_id && <>
                                {
                                  res?.sub_category?.map((element) => {
                                    return (
                                      <div className="ml-3">
                                        <p className="py-2 border-b"> {element?.sub_category_name}</p>
                                      </div>
                                    )
                                  })
                                }
                              </>
                            }
                          </div>
                        </>
                      })
                    }
                  </>

                }
              </div>
            )
          })
        }
      </div>
    </nav>
  );
}

function HeaderRightContent() {
  const { user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.shopCart);
  const [openCartSheet, setOpenCartSheet] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logoutUser());
  }

  useEffect(() => {
    dispatch(fetchCartItems(user?.id));
  }, [dispatch]);

  console.log(cartItems, "sangam");

  return (
    <div className="flex justify-between py-5 lg:items-center lg:flex-row flex-row gap-4">
      <Sheet open={openCartSheet} onOpenChange={() => setOpenCartSheet(false)}>
        <Button
          onClick={() => setOpenCartSheet(true)}
          variant="outline"
          size="icon"
          className="relative"
        >
          <ShoppingCart className="w-6 h-6" />
          <span className="absolute top-[-5px] right-[2px] font-bold text-sm">
            {cartItems?.items?.length || 0}
          </span>
          <span className="sr-only">User cart</span>
        </Button>
        <UserCartWrapper
          setOpenCartSheet={setOpenCartSheet}
          cartItems={
            cartItems && cartItems.items && cartItems.items.length > 0
              ? cartItems.items
              : []
          }
        />
      </Sheet>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="bg-black cursor-pointer">
            <AvatarFallback className="bg-black text-white font-extrabold">
              {user?.userName[0].toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="right" className="w-56">
          <DropdownMenuLabel>Logged in as {user?.userName}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => navigate("/shop/account")}>
            <UserCog className="mr-2 h-4 w-4" />
            Account
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

function ShoppingHeader() {
  // eslint-disable-next-line no-unused-vars
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/shop/home" className="flex items-center gap-2">
          <HousePlug className="h-6 w-6" />
          <span className="font-bold">E commerce</span>
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle header menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full max-w-xs">
            <MenuItems />
            <HeaderRightContent />
          </SheetContent>
        </Sheet>
        <div className="hidden">
          <MenuItems />
        </div>

        <div className="hidden lg:block">
          <HeaderRightContent />
        </div>
      </div>
    </header>
  );
}

export default ShoppingHeader;
