import { useFindAllTaskByGuardian } from "@/hooks/data/useTask";

const useDashboardTasks = (publicId: string) => {
  const {
    data: children,
    isLoading,
    isError,
  } = useFindAllTaskByGuardian(publicId);

  return { children, isLoading, isError };
};

export default useDashboardTasks;
