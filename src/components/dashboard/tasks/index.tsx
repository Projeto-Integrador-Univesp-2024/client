"use client";

import useDashboardTasksTable from "@/hooks/home/dashboard/tasks/useDashboardTasksTable";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import DashboardLoading from "../loading";

interface DashboardTasksComponentProps {
  childId: string;
}

const DashboardTasksComponent = ({ childId }: DashboardTasksComponentProps) => {
  const { tasks, isLoading } = useDashboardTasksTable(childId);
  if (isLoading) {
    return <DashboardLoading />;
  }

  return <DataTable columns={columns} data={tasks ?? []} />;
};

export default DashboardTasksComponent;
