import { cn } from "@/lib/utils";
import { LucideProps } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface MenuMobileItemProps {
  link: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}

const MenuMobileItem = (props: MenuMobileItemProps) => {
  const pathname = usePathname();
  const activeColors = "bg-sky-500 text-stone-100";
  const defaultColors = "bg-transparent text-stone-800";

  return (
    <Link
      href={props.link}
      className={cn(
        "flex h-full w-full items-center justify-center text-center first:rounded-r-lg last:rounded-l-lg even:rounded-lg sm:first:rounded-bl-lg sm:last:rounded-tl-lg sm:even:rounded-l-lg",
        pathname == props.link ? activeColors : defaultColors,
      )}
    >
      <props.icon className="h-6 w-6" />
    </Link>
  );
};

export default MenuMobileItem;
