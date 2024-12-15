import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import accImg from "../../assets/account.jpg";
import Address from "@/components/shopping-view/address";
import ShoppingOrders from "@/components/shopping-view/orders";
import Profile from "@/components/shopping-view/Profile";
import { Card } from "@/components/ui/card";
import { useLocation } from "react-router-dom";

function ShoppingAccount() {
  const location = useLocation()

  const pageValue = location?.state

  console.log("pageValue",pageValue)

  return (
    <div className="flex flex-col">
      <div className=" w-full overflow-hidden">
        <div>
          {/* <Card className="w-72">
            Total Orders
            500.00
          </Card> */}
        </div>
        {/* <img
          src={accImg}
          className="h-full w-full object-cover object-center"
        /> */}
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-8 py-8">
        <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
          <Tabs defaultValue={pageValue ? pageValue : "orders"}>
            <TabsList>
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="address">Address</TabsTrigger>
            </TabsList>
            <TabsContent value="orders">
              <ShoppingOrders />
            </TabsContent>
            <TabsContent value="address">
              <Address />
            </TabsContent>
            <TabsContent value="profile">
              <Profile />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default ShoppingAccount;
