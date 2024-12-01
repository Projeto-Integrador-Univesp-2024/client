import DashboardHomeCard from "./card";
import DashboardHomePoints from "./points";
import { Coins, LayoutList, ListCheck } from "lucide-react";
import useDashboardHomeData from "@/hooks/home/dashboard/useDashboardHomeData";
import DashboardHeader from "../header";
import { usePathname } from "next/navigation";
import DashboardLoading from "../loading";
import DashboardHomeChild from "./child";

interface DashboardHomeFullPageProps {
  guardianId: string;
}

const DashboardHomeFullPage = ({ guardianId }: DashboardHomeFullPageProps) => {
  const pathname = usePathname();
  const { metrics, isLoading } = useDashboardHomeData(guardianId);

  if (isLoading) {
    return <DashboardLoading />;
  }

  if (!metrics) {
    return <DashboardLoading />;
  }

  return (
    <>
      <DashboardHeader
        title="Dashboard"
        link={{
          href: pathname + "/tasks/new",
          children: "Criar Nova Tarefa",
        }}
      />
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-2 xl:grid-cols-6">
        <DashboardHomeCard
          title="Total Pontos"
          content={
            <div className="text-2xl font-bold text-stone-800">
              P$ {metrics.totalPoints}
            </div>
          }
          icon={Coins}
        />

        <DashboardHomeCard
          title="Tarefas Totais"
          content={
            <div className="text-2xl font-bold text-stone-800">
              {metrics.totalTasks}
            </div>
          }
          icon={LayoutList}
        />

        <DashboardHomeCard
          title="Tarefas Totais Feitas"
          content={
            <div className="text-2xl font-bold text-stone-800">
              {metrics.totalTasksDone}
            </div>
          }
          icon={ListCheck}
        />
      </div>
      <div className="grid flex-1 grid-cols-1 gap-3 lg:grid-cols-3">
        <DashboardHomePoints guardianId={guardianId} />
        <DashboardHomeChild guardianId={guardianId} />
      </div>
    </>
  );
};

export default DashboardHomeFullPage;
