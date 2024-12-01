"use client";

import DashboardHeader from "@/components/dashboard/header";
import DashboardLoading from "@/components/dashboard/loading";
import { columns } from "@/components/dashboard/products/columns";
import { DataTable } from "@/components/dashboard/products/data-table";
import { Card, CardContent } from "@/components/ui/card";
import useDashboardProducts from "@/hooks/home/dashboard/products/useDashboardProducts";
import { Plus } from "lucide-react";

interface DashboardProductsPageProps {
  params: {
    userId: string;
  };
}

const DashboardProductsPage = ({ params }: DashboardProductsPageProps) => {
  const { products, isLoading } = useDashboardProducts(params.userId);

  if (isLoading) {
    return <DashboardLoading />;
  }

  return (
    <main className="flex h-full w-full flex-1 flex-col items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <DashboardHeader
        title="Produtos"
        link={{
          href: "products/new",
          children: "Adicionar Produto",
          icon: Plus,
        }}
      />
      <Card className="w-full">
        <CardContent>
          <DataTable columns={columns} data={products} />
        </CardContent>
      </Card>
    </main>
  );
};

export default DashboardProductsPage;
