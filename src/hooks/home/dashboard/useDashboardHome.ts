import { useFindAllChild } from "@/hooks/data/useChild";

const useDashboardHome = (userId: string) => {
	const { data: children, isLoading, isError } = useFindAllChild(userId);

	return { children, isLoading, isError };
};

export default useDashboardHome;
