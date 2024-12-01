import { useQuery } from "@tanstack/react-query";
import { MetricsClass } from "@/action/metrics.action";
import { MetricsType } from "@/types/metrics";

const metricsClass = new MetricsClass();

export const useFindMetrics = (guardianId: string) => {
  return useQuery({
    queryKey: ["metrics", guardianId],
    queryFn: () => metricsClass.find(guardianId),
    enabled: !!guardianId,
  });
};

export const useFindLastTasks = (
  guardianId: string,
  filter: MetricsType.LastTasksFilter,
) => {
  return useQuery({
    queryKey: ["lastTasks", guardianId, filter],
    queryFn: () => metricsClass.findLastTasks(guardianId, filter),
    enabled: !!guardianId,
  });
};

export const useFindChildMetrics = (childId: number) => {
  return useQuery({
    queryKey: ["childMetrics", childId],
    queryFn: () => metricsClass.findChildren(childId),
    enabled: !!childId,
  });
};
