import { useFindAllTaskType } from "@/hooks/data/useTaskType";

const useDashboardTaskTypes = (guardianId: string) => {
	const {
		data: taskTypes,
		isLoading,
		isError,
	} = useFindAllTaskType(guardianId);

	return { taskTypes, isLoading, isError };
};

export default useDashboardTaskTypes;
