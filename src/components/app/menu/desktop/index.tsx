"use client";

import MenuItem from "./menu-desktop-item";
import { MenuItems } from "../items";

interface MenuDesktopProps {
  userId: string;
}

const MenuDesktop = ({ userId }: MenuDesktopProps) => {
  const items = MenuItems({ userId });

  return (
    <nav className="hidden h-20 w-full gap-3 sm:flex">
      {items.map((item, index) => (
        <MenuItem {...item} key={index} />
      ))}
    </nav>
  );
};

export default MenuDesktop;
