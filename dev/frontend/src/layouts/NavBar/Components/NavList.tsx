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
    <ul {...props} className={twMerge(` text-white ${props.className} `)}>
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
    label: "Dashboard",
    link: NavRoutes.dashboard(),
  },
  {
    id: "2",
    label: "Manager",
    link: NavRoutes.manager(),
  },
  {
    id: "3",
    label: "Client",
    link: NavRoutes.client(),
  },
  {
    id: "4",
    label: "Assurance",
    link: NavRoutes.assurance(),
  },
];
