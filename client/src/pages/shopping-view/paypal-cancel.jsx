import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { cancelPayment } from "@/store/shop/order-slice"; // Action to handle cancellation
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

function PaypalCancelPage() {
  const dispatch = useDispatch();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const token = params.get("token");

  useEffect(() => {
    if (token) {
      const orderId = JSON.parse(sessionStorage.getItem("currentOrderId"));

      dispatch(cancelPayment({ token, orderId })).then((data) => {
        if (data?.payload?.success) {
          sessionStorage.removeItem("currentOrderId");
          // Redirect to cancellation confirmation or retry page
          // window.location.href = "/shop/payment-canceled";
        }
      });
    }
  }, [token, dispatch]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Canceled. Redirecting...</CardTitle>
      </CardHeader>
    </Card>
  );
}

export default PaypalCancelPage;
