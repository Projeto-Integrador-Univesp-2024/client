import { useFindLastTasks } from "@/hooks/data/useMetrics";
import { MetricsType } from "@/types/metrics";
import { useState } from "react";

const useDashboardHomePoints = (guardianId: string) => {
	const [lastTasksFilter, setLastTasksFilter] =
		useState<MetricsType.LastTasksFilter>("all");
	const {
		data: lastTasks,
		isLoading,
		isError,
	} = useFindLastTasks(guardianId, lastTasksFilter);

	const filters: MetricsType.LastTasksFilters[] = [
		{ value: "all", label: "Todos" },
		{ value: "year", label: "Último Ano" },
		{ value: "month", label: "Último Mês" },
		{ value: "week", label: "Última Semana" },
	];

	return {
		lastTasks,
		filters,
		isLoading,
		isError,
		lastTasksFilter,
		setLastTasksFilter,
	};
};

export default useDashboardHomePoints;
