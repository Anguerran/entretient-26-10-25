import NavList from "./Components/NavList";

const Navbar = () => {
  return (
    <nav className="flex h-h100 items-center     justify-between gap-20 bg-opacity-0  mx-auto    ">
      <div className="flex gap-5 items-center">
        <p>LOgo</p>
      </div>
      <NavList className="" />
   
   
    </nav>
  );
};

export default Navbar;
