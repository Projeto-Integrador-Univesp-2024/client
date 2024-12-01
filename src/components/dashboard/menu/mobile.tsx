"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { DashboardMenuItems } from "./items";
import DashboardMenuLogo from "./logo";

interface DashboardMenuMobileProps {
  userId: string;
}

const DashboardMenuMobile = ({ userId }: DashboardMenuMobileProps) => {
  const menuItems = DashboardMenuItems(userId);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="sm:hidden">
          <Menu className="h-5 w-5 text-stone-800" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-stone-200 sm:max-w-xs">
        <nav className="grid gap-6 text-lg font-medium">
          <div className="flex w-full items-center justify-between">
            <DashboardMenuLogo />
            <SheetClose asChild>
              <X className="h-5 w-5 text-stone-800" />
            </SheetClose>
          </div>
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex items-center gap-4 px-2.5 text-stone-800 hover:text-foreground"
            >
              <item.icon className="h-5 w-5" />
              {item.title}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default DashboardMenuMobile;
