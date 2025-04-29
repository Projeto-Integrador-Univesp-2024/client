import { useQuery } from "@tanstack/react-query";
import { TaskClass } from "@/action/task.action";

const taskClass = new TaskClass();

export const useFindAllTaskByChild = (childId: string) => {
	return useQuery({
		queryKey: ["allTaskByChild", childId],
		queryFn: () => taskClass.findAllByChild(childId),
		enabled: !!childId,
	});
};

export const useFindAllTaskByGuardian = (guardianId: string) => {
	return useQuery({
		queryKey: ["allTaskByGuardian", guardianId],
		queryFn: () => taskClass.findAllByGuardian(guardianId),
		enabled: !!guardianId,
	});
};

export const useFindOneTask = (taskId: number) => {
	return useQuery({
		queryKey: ["oneTask", taskId],
		queryFn: () => taskClass.findOne(taskId),
		enabled: !!taskId,
		staleTime: 1000 * 60 * 5,
		refetchOnWindowFocus: false,
	});
};
