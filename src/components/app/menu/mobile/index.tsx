"use client";

import MenuItem from "./menu-mobile-item";
import { MenuItems } from "../items";

interface MenuMobileProps {
  userId: string;
}

const MenuMobile = ({ userId }: MenuMobileProps) => {
  const items = MenuItems({ userId });

  return (
    <nav className="fixed bottom-0 flex h-20 w-full border-t-2 border-stone-300 bg-stone-100 sm:relative sm:bottom-auto sm:hidden sm:h-full sm:w-80 sm:flex-col sm:border-l-2 sm:border-t-0">
      {items.map((item, index) => (
        <MenuItem {...item} key={index} />
      ))}
    </nav>
  );
};

export default MenuMobile;
