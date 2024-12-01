"use client";

import DashboardHeader from "@/components/dashboard/header";
import DashboardLoading from "@/components/dashboard/loading";
import DashboardTasksComponent from "@/components/dashboard/tasks";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useDashboardTasks from "@/hooks/home/dashboard/tasks/useDashboardTasks";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";

interface DashboardTasksPageProps {
  params: {
    userId: string;
  };
}

const DashboardTasksPage = ({ params }: DashboardTasksPageProps) => {
  const { children, isLoading } = useDashboardTasks(params.userId);

  if (isLoading) {
    return <DashboardLoading />;
  }

  if (!children || children.length === 0) {
    return (
      <div className="flex h-full w-full flex-1 items-center justify-center">
        Nenhuma tarefa encontrada.
      </div>
    );
  }

  return (
    <main className="flex h-full w-full flex-1 flex-col items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <DashboardHeader
        title="Tarefas"
        link={{
          href: "tasks/new",
          children: "Adicionar Tarefa",
          icon: Plus,
        }}
      />
      <Tabs defaultValue="child-0" className="w-full">
        <TabsList className={cn("grid w-full", `grid-cols-${children.length}`)}>
          {children.map((child, index) => (
            <TabsTrigger value={`child-${index}`} key={index}>
              {child.user.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {children.map((child, index) => (
          <TabsContent value={`child-${index}`} key={index}>
            <Card className="w-full">
              <CardContent className="pt-6">
                <DashboardTasksComponent childId={child.user.publicId} />
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </main>
  );
};

export default DashboardTasksPage;
