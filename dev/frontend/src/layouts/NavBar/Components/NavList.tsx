import { FC, HTMLAttributes } from "react";
import { NavRoutes } from "../Routes/NavRoutes";
import NAvItem from "./NavItem";
import { twMerge } from "tailwind-merge";

export type NavItemType = {
  id: string;
  link: string;
  label: string;
};


const NavList: FC<HTMLAttributes<HTMLUListElement>> = ({ ...props }) => {
  return (
    <ul
      {...props}
      className={twMerge(`flex items-center gap-5 ${props.className} `)}
    >
      {navTable.map((item) => (
        <NAvItem item={item} />
      ))}
    </ul>
  );
};

export default NavList;

  const navTable: NavItemType[] = [
    {
      id: "1",
      label: "Home",
      link: NavRoutes.home(),
    },
  ];