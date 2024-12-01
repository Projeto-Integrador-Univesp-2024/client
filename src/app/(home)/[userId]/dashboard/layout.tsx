"use client";

import DashboardBreadcrumb from "@/components/dashboard/breadcrumb";
import DashboardLoading from "@/components/dashboard/loading";
import DashboardMenuDesktop from "@/components/dashboard/menu/desktop";
import DashboardMenuMobile from "@/components/dashboard/menu/mobile";
import DashboardProfile from "@/components/dashboard/profile";
import DashboardSearch from "@/components/dashboard/search";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface DashboardUserLayoutProps {
  children: ReactNode;
  params: {
    userId: string;
  };
}

const DashboardUserLayout = ({
  children,
  params,
}: DashboardUserLayoutProps) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <DashboardLoading />;
  }

  if (!session) {
    router.push("/auth/signin");
    return null;
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-stone-200">
      <DashboardMenuDesktop userId={params.userId} />
      <div className="h-h-full flex flex-1 flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-stone-200 px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <DashboardMenuMobile userId={params.userId} />
          <DashboardBreadcrumb userId={params.userId} />
          <DashboardSearch />
          <DashboardProfile />
        </header>
        {children}
      </div>
    </div>
  );
};

export default DashboardUserLayout;
