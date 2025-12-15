import { Outlet } from "react-router";
import { NavBar, Footer, SideBar } from "../components";

const MainLayout = () => {
  return (
    <div className="drawer">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col min-h-screen">
        <NavBar />
        <div className="grow">
          <Outlet />
        </div>
        <Footer />
      </div>
      <SideBar />
    </div>
  );
};

export default MainLayout;
