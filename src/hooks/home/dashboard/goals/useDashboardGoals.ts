import { useFindAllGoalByGuardian } from "@/hooks/data/useGoals";

const useDashboardGoals = (guardianId: string) => {
  const {
    data: goals,
    isLoading,
    isError,
  } = useFindAllGoalByGuardian(guardianId);

  return { goals, isLoading, isError };
};

export default useDashboardGoals;
