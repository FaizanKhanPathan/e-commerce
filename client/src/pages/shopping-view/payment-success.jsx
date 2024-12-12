import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { dateformat } from "@/lib/utils";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

function PaymentSuccessPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const user = useSelector((state) => state?.auth?.user)
  const orderDetails = location?.state

  console.log("orderDetails", orderDetails)


  return (
    <Card className="p-10">
      <CardHeader className="p-0 text-center">
        <CardTitle className="text-xl">Payment is successful!</CardTitle>
      </CardHeader>
      <div className="flex justify-center">
        <div className="w-[500px] my-4 text-[14px]">
          <div className="flex justify-between mt-2">
            <div>
              Amount
            </div>
            <div>$ {orderDetails?.totalAmount.toFixed(2)}</div>
          </div>
          <div className="flex justify-between mt-2 border-dotted border-b-2 pb-2">
            <div>
              Payment Status
            </div>
            <div className={`border px-6 ${orderDetails?.paymentStatus == "paid" ? "bg-green-600" : "bg-red-600"}  text-white rounded-md`}>{orderDetails?.paymentStatus == "paid" ? "Paid" : "Cancel"}</div>
          </div>
          <div className="mt-3 flex justify-between">
            <div>
              Name
            </div>
            <div className="">{user?.userName}</div>
          </div>
          <div className="mt-2 flex justify-between">
            <div>
              Email ID
            </div>
            <div className="">{user?.email}</div>
          </div>
          <div className="mt-2 flex justify-between">
            <div>
              Payment ID
            </div>
            <div className="">{orderDetails?.paymentId}</div>
          </div>
          <div className="mt-2 flex justify-between">
            <div>
              Payer ID
            </div>
            <div className="">{orderDetails?.payerId}</div>
          </div>
          <div className="mt-2 flex justify-between border-dotted border-b-2 pb-2">
            <div>
              Date
            </div>
            <div className="">{dateformat(orderDetails?.orderDate)}</div>
          </div>

          {/* <div className="mt-2 flex justify-between">
            <div>
              Product Name
            </div>
            <div className="w-72">{orderDetails?.cartItems?.[0]?.title}</div>
          </div> */}
          <div className="mt-2 flex justify-between">
            <div>
              Product ID
            </div>
            <div className="">{orderDetails?.cartItems?.[0]?.productId}</div>
          </div>
          <div className="mt-2 flex justify-between">
            <div>
              Quantity
            </div>
            <div className="">{orderDetails?.cartItems?.[0]?.quantity}</div>
          </div>
          <div className="flex justify-center mt-3">
            <Button onClick={() => navigate("/shop/account")}>Back to Home</Button>
          </div>
        </div>
      </div>
      {/* <Button className="mt-5" onClick={() => navigate("/shop/account")}>
        View Orders
      </Button> */}
    </Card>
  );
}

export default PaymentSuccessPage;
