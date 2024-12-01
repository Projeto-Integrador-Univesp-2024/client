import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Settings } from "lucide-react";
import Link from "next/link";
import { DashboardMenuItems } from "./items";
import DashboardMenuLogo from "./logo";
import { usePathname } from "next/navigation";

interface DashboardMenuDesktopProps {
  userId: string;
}

const DashboardMenuDesktop = ({ userId }: DashboardMenuDesktopProps) => {
  const menuItems = DashboardMenuItems(userId);
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <DashboardMenuLogo />
        {menuItems.map((menuItem, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <Link
                href={menuItem.href}
                className={`flex size-9 items-center justify-center rounded-lg transition-colors ${pathname === menuItem.href ? "text-sky-600" : "text-stone-800"} `}
              >
                <menuItem.icon
                  className={`transition-transform ${pathname === menuItem.href ? "size-6" : "size-5"}`}
                />
                <span className="sr-only">{menuItem.title}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">{menuItem.title}</TooltipContent>
          </Tooltip>
        ))}
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            >
              <Settings className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Settings</TooltipContent>
        </Tooltip>
      </nav>
    </aside>
  );
};

export default DashboardMenuDesktop;
