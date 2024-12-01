import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

declare namespace SettingType {
  type Item = {
    title: string;
    icon: ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
    link: string;
    bg?: string;
    active: boolean;
  };
}
