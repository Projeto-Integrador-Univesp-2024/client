import { TaskTypeClass } from "@/action/taskType.action";
import { useQuery } from "@tanstack/react-query";

const taskTypeClass = new TaskTypeClass();

export const useFindAllTaskType = (guardianId: string) => {
  return useQuery({
    queryKey: ["allTaskType", guardianId],
    queryFn: () => taskTypeClass.find(guardianId),
    enabled: !!guardianId,
  });
};

export const useFindOneTaskType = (taskTypeId: number) => {
  return useQuery({
    queryKey: ["oneTaskType", taskTypeId],
    queryFn: () => taskTypeClass.findOne(taskTypeId),
    enabled: !!taskTypeId,
  });
};
