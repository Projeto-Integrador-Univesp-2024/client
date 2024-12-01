"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { usePathname } from "next/navigation";

interface DashboardBreadcrumbProps {
  userId: string;
}

const DashboardBreadcrumb = ({ userId }: DashboardBreadcrumbProps) => {
  const pathname = usePathname();
  const pathSegments = pathname
    .replace(`/${userId}/dashboard`, "")
    .split("/")
    .filter((segment) => segment);

  return (
    <Breadcrumb className="hidden md:flex">
      <BreadcrumbList>
        {/* Link fixo para o Dashboard */}
        <BreadcrumbItem>
          <BreadcrumbLink href={`/${userId}/dashboard`}>
            Dashboard
          </BreadcrumbLink>
        </BreadcrumbItem>

        {pathSegments.map((segment, index) => {
          const isLast = index === pathSegments.length - 1; // Ajuste o índice para o último item
          const href = `/${userId}/dashboard/${pathSegments.slice(2, index + 3).join("/")}`;

          return (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem key={index}>
                {isLast ? (
                  <BreadcrumbPage className="capitalize">
                    {segment}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={href} className="capitalize">
                    {segment}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default DashboardBreadcrumb;
