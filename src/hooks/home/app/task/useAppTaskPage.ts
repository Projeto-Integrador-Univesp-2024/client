import { useFindAllTaskByChild } from "@/hooks/data/useTask";

const useAppTaskPage = (childId: string) => {
  const { data: tasks, isLoading, isError } = useFindAllTaskByChild(childId);
  return { tasks, isLoading, isError };
};

export default useAppTaskPage;
