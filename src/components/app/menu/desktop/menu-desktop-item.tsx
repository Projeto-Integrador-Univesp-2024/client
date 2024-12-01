import { cn } from "@/lib/utils";
import { LucideProps } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface MenuDesktopItemProps {
  title: string;
  link: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}

const MenuDesktopItem = (props: MenuDesktopItemProps) => {
  const pathname = usePathname();
  const activeColors = "text-sky-500";
  const defaultColors = "text-stone-400";

  return (
    <Link
      href={props.link}
      className={cn(
        "flex h-full w-full items-center justify-center text-center first:rounded-r-lg last:rounded-l-lg even:rounded-lg sm:first:rounded-bl-lg sm:last:rounded-tl-lg sm:even:rounded-l-lg",
        pathname == props.link ? activeColors : defaultColors,
      )}
    >
      <p className="text-xl">{props.title}</p>
    </Link>
  );
};

export default MenuDesktopItem;
