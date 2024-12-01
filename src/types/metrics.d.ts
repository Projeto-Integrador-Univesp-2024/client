import { ChildType } from "./child";

declare namespace MetricsType {
  type Item = {
    totalPoints: number;
    totalTasks: number;
    totalTasksDone: number;
  };

  type Child = {
    date: string;
    donePoints: number;
    failedPoints: number;
  };

  type LastTasks = {
    id: number;
    childId: number;
    taskTypeId: number;
    name: string;
    points: number;
    status: "DONE" | "PENDING" | "FAILED";
    deadline: string;
    createdAt: string;
    updatedAt: string;
    deletedAt?: string;
    child: ChildType.Child;
  };

  type LastTasksFilter = "all" | "year" | "month" | "week";

  type LastTasksFilters = {
    value: LastTasksFilter;
    label: string;
  };
}
