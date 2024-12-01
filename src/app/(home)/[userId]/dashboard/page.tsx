"use client";

import DashboardHomeEmptyPage from "@/components/dashboard/home/empty-page";
import DashboardHomeFullPage from "@/components/dashboard/home/full-page";
import DashboardLoading from "@/components/dashboard/loading";
import useDashboardHome from "@/hooks/home/dashboard/useDashboardHome";

interface DashboardHomePageProps {
  params: {
    userId: string;
  };
}

const DashboardHomePage = ({ params }: DashboardHomePageProps) => {
  const { children, isLoading } = useDashboardHome(params.userId);

  if (isLoading) {
    return <DashboardLoading />;
  }

  return (
    <main className="flex h-full flex-1 flex-col gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      {!children || children.length == 0 ? (
        <DashboardHomeEmptyPage />
      ) : (
        <DashboardHomeFullPage guardianId={params.userId} />
      )}
    </main>
  );
};

export default DashboardHomePage;
