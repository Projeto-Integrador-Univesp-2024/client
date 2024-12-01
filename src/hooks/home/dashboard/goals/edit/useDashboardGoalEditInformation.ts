import { useFindAllChild } from "@/hooks/data/useChild";

const useDashboardGoalEditInformation = (guardianId: string) => {
  const { data: children, isLoading, isError } = useFindAllChild(guardianId);

  return { children, isLoading, isError };
};

export default useDashboardGoalEditInformation;
