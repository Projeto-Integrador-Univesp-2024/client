import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, ReactNode, RefAttributes } from "react";

interface DashboardHomeCardProps {
  title: string;
  content?: ReactNode;
  footer?: ReactNode;
  icon?: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}

const DashboardHomeCard = ({
  title,
  content,
  footer,
  icon: Icon,
}: DashboardHomeCardProps) => {
  const ContentComponent = content && <CardContent>{content}</CardContent>;

  const FooterComponent = footer && <CardFooter>{footer}</CardFooter>;

  return (
    <Card className="sm:col-span-2">
      <CardHeader className="flex flex-col space-y-0 pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          {Icon && <Icon className="h-4 w-4 text-stone-600" />}
        </div>
      </CardHeader>

      {ContentComponent}

      {FooterComponent}
    </Card>
  );
};

export default DashboardHomeCard;
