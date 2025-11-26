import { Outlet } from "react-router-dom";

import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";

const Header = () => {
  return (
    <div className=" bg-gradient-to-tr from-grey-100/20   ">
      <div className=" backdrop-blur-[20px] px-5 z-50 fixed left-0 border-b border-b-gray-300 bg-white/50 right-0">
        <Navbar />
      </div>
      <div className=" max-w-[1240px] min-h-screen h-full pt-28 px-5 mx-auto ">
        <Outlet />
      </div>
      <div>
        <div className="">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Header;
