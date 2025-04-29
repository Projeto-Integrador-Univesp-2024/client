import { useFindMetrics } from "@/hooks/data/useMetrics";
import { MetricsType } from "@/types/metrics";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const useDashboardHomeData = (guardianId: string) => {
	const [lastTasksFilter, setLastTasksFilter] =
		useState<MetricsType.LastTasksFilter>("all");
	const { status } = useSession();
	const router = useRouter();

	if (status === "unauthenticated") {
		router.push("~/auth/signin");
	}

	const { data: metrics, isLoading, isError } = useFindMetrics(guardianId);

	return {
		metrics,
		lastTasksFilter,
		isLoading,
		isError,
		setLastTasksFilter,
	};
};

export default useDashboardHomeData;
