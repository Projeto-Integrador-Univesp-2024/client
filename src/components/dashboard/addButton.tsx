import Link from "next/link";
import { Button } from "../ui/button";
import { ReactNode } from "react";

export interface AddButtonProps {
  href: string;
  children: ReactNode;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const AddButton = ({ href, children, icon: Icon }: AddButtonProps) => {
  return (
    <Button className="right-0 ml-auto flex w-fit" asChild>
      <Link href={href}>
        {Icon && <Icon className="size-4" />}
        {children}
      </Link>
    </Button>
  );
};
