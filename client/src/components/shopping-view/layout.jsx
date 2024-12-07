import { Outlet } from "react-router-dom";
import ShoppingHeader from "./header";
import MegaMenuSearch from "../global-components/MegaMenuSearch";
import Footer from "../common/Footer";
import DeliveryTimer from "../global-components/DeliveryTimer";

function ShoppingLayout() {
  return (
    <div className="flex flex-col bg-secondary overflow-hidden relative">
      {/* common header */}
      <ShoppingHeader />
      <MegaMenuSearch />
      <div className="fixed top-[460px] cursor-pointer">
        <DeliveryTimer />
      </div>
      <main className="flex flex-col w-full">
        <Outlet />
      </main>
      <>
        <Footer />
      </>
    </div>
  );
}

export default ShoppingLayout;
