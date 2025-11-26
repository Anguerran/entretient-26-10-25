import { FC } from "react";
import { NavLink } from "react-router-dom";
import { NavItemType } from "./NavList";

type Props = {
  item: NavItemType;
};
const NAvItem: FC<Props> = ({ item }) => {
  return (
    <li className="font-semibold hover:text-gray-600 h-h38 hover:bg-black-secondary items-center flex px-4 rounded-xl ">
      <NavLink
        to={item.link}
        className={({ isActive }) =>
          ` ${
            isActive && "  border-b-2 text-gray-500 border-b-black-500"
          } `
        }
        
      >
        {item.label}
      </NavLink>
    </li>
  );
};

export default NAvItem;
