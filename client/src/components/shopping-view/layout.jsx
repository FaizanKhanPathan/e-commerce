import { Outlet } from "react-router-dom";
import ShoppingHeader from "./header";
import MegaMenuSearch from "../global-components/MegaMenuSearch";
import Footer from "../common/Footer";

function ShoppingLayout() {
  return (
    <div className="flex flex-col bg-secondary overflow-hidden">
      {/* common header */}
      <ShoppingHeader />
      <MegaMenuSearch/>
      <main className="flex flex-col w-full">
        <Outlet />
      </main>
      <>
      <Footer/>
      </>
    </div>
  );
}

export default ShoppingLayout;
