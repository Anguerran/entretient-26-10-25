import { Outlet } from "react-router-dom";

import Navbar from "../NavBar/Navbar";
import NavList from "../NavBar/Components/NavList";

const Header = () => {
  return (
    <div className=" bg-gradient-to-tr from-grey-100/20   ">
      <div className=" backdrop-blur-[20px] px-5 z-50 fixed left-0 border-b border-b-gray-300 bg-white/50 right-0">
        <Navbar />
      </div>
      <div className="flex  ">
        <div className="w-40 relative flex justify-center bg-blue-primary items-center flex-col  h-screen border-r border-gray-400">
          <h2 className="text-white italic absolute top-14 ">INTIA</h2>
          <NavList />
        </div>
        <div className=" max-w-[1240px] min-h-screen h-full pt-28 px-5 mx-auto ">
          <Outlet />
        </div>
      </div>
      <div>
        <div className="">{/* <Footer /> */}</div>
      </div>
    </div>
  );
};

export default Header;
