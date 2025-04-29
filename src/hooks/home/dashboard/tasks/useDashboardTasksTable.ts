import { useFindAllTaskByChild } from "./../../../data/useTask";

const useDashboardTasksTable = (childId: string) => {
	const { data: tasks, isLoading, isError } = useFindAllTaskByChild(childId);

	return { tasks, isLoading, isError };
};

export default useDashboardTasksTable;
