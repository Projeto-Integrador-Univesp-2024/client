import { GoalsClass } from "@/action/goal.action";
import { useQuery } from "@tanstack/react-query";

const goalsClass = new GoalsClass();

export const useFindOneGoal = (id: number) => {
  return useQuery({
    queryKey: ["oneGoal", id],
    queryFn: () => goalsClass.findOne(id),
    enabled: !!id,
  });
};

export const useFindAllGoalByGuardian = (guardianId: string) => {
  return useQuery({
    queryKey: ["allGoalByGuardian", guardianId],
    queryFn: () => goalsClass.findAllByGuardian(guardianId),
    enabled: !!guardianId,
  });
};
