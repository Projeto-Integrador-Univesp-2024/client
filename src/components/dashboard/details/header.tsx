"use client";

import { ChevronLeft } from "lucide-react";
import DashboardDetailsActions from "./actions";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface DashboardDetailsHeaderProps {
  title: string;
}

const DashboardDetailsHeader = ({ title }: DashboardDetailsHeaderProps) => {
  const router = useRouter();
  return (
    <div className="flex items-center gap-4">
      <Button
        variant="outline"
        size="icon"
        className="h-7 w-7 bg-stone-800"
        type="button"
        onClick={() => router.back()}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Back</span>
      </Button>
      <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight text-stone-800 sm:grow-0">
        {title}
      </h1>
      <div className="hidden items-center gap-2 md:ml-auto md:flex">
        <DashboardDetailsActions />
      </div>
    </div>
  );
};

export default DashboardDetailsHeader;
