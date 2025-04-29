import { useFindAllTaskType } from "@/hooks/data/useTaskType";

const useDashboardTaskEditInformation = (guardianId: string) => {
	const {
		data: taskTypes,
		isLoading,
		isError,
	} = useFindAllTaskType(guardianId);
	return { taskTypes, isLoading, isError };
};

export default useDashboardTaskEditInformation;
