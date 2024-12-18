import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import AdminLayout from "./components/admin-view/layout";
import AdminDashboard from "./pages/admin-view/dashboard";
import AdminProducts from "./pages/admin-view/products";
import AdminOrders from "./pages/admin-view/orders";
import AdminFeatures from "./pages/admin-view/features";
import ShoppingLayout from "./components/shopping-view/layout";
import NotFound from "./pages/not-found";
import ShoppingHome from "./pages/shopping-view/home";
import ShoppingListing from "./pages/shopping-view/listing";
import ShoppingCheckout from "./pages/shopping-view/checkout";
import ShoppingAccount from "./pages/shopping-view/account";
import CheckAuth from "./components/common/check-auth";
import UnauthPage from "./pages/unauth-page";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { checkAuth } from "./store/auth-slice";
import { Skeleton } from "@/components/ui/skeleton";
import PaypalReturnPage from "./pages/shopping-view/paypal-return";
import PaymentSuccessPage from "./pages/shopping-view/payment-success";
import SearchProducts from "./pages/shopping-view/search";
import AdminBrands from "./pages/admin-view/brands";
import ForgetPassword from "./pages/auth/forget-password";
import EnterOtp from "./pages/auth/enter-otp";
import ResetPassword from "./pages/auth/reset-password";
import PaymentCancelPage from "./pages/shopping-view/paypal-cancel";
import Users from "./pages/admin-view/Users";
import Payments from "./pages/admin-view/Payments";
import ProductDetails from "./pages/shopping-view/ProductDetails";
import ComingSoon from "./pages/not-found/ComingSoon";
import ScrollToTop from "./components/common/ScrollToTop";
import VerifyEmail from "./pages/auth/verify-email";
import DialogVerifyEmail from "./pages/auth/dialog-verify-email";
import PivacyPolicy from "./pages/not-found/privacy-policy";
import TermsAndConditions from "./pages/not-found/terms-conditions";
import ReturnPolicy from "./pages/not-found/return-policy";

function App() {
 const [open, setOpen] = useState(false);
  
  const { user, isAuthenticated, isLoading } = useSelector(
    (state) => state?.auth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  useEffect(() => {
if(!user?.isEmailVerified && isAuthenticated ) {
  setOpen(true)
} 
 }, [isAuthenticated]);


 
  if (isLoading) return <Skeleton className="w-[800] bg-primary h-[600px]" />;

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <ScrollToTop />
      <Routes>
        
        <Route
          path="/"
          element={
            <CheckAuth
              isAuthenticated={isAuthenticated}
              user={user}
            ></CheckAuth>
          }
        />
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
          <Route path="verify-email" element={<VerifyEmail />} />
          <Route path="forgot-password" element={<ForgetPassword />} />
          <Route path="otp" element={<EnterOtp />} />
          <Route path="reset-password" element={<ResetPassword />} />
        </Route>
        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="features" element={<AdminFeatures />} />
          <Route path="brands" element={<AdminBrands />} />
          <Route path="users" element={<Users />} />
          <Route path="payments" element={<Payments />} />
        </Route>
        <Route
          path="/shop"
          element={
            <ShoppingLayout />
          }
        >
          <Route path="account" element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <ShoppingAccount />
            </CheckAuth>
          } />


          <Route path="home" element={<ShoppingHome />} />
          <Route path="product-details/:id" element={<ProductDetails />} />
          <Route path="listing" element={<ShoppingListing />} />
          <Route path="checkout" element={<ShoppingCheckout />} />
          <Route path="paypal-return" element={<PaypalReturnPage />} />
          <Route path="payment-success" element={<PaymentSuccessPage />} />
          <Route path="paypal-cancel" element={<PaymentCancelPage />} />
          <Route path="search" element={<SearchProducts />} />
          <Route path="coming-soon" element={<ComingSoon />} />

          <Route path="shipping-methods" element={<ComingSoon />} />
          <Route path="privacy-policy" element={<PivacyPolicy/>}/>
          <Route path="terms-conditions" element={<TermsAndConditions />} />
          <Route path="return-policy" element={<ReturnPolicy />} />
          
        </Route>
        <Route path="/unauth-page" element={<UnauthPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <DialogVerifyEmail open={open} setOpen={setOpen} />
    </div>
  );
}

export default App;
