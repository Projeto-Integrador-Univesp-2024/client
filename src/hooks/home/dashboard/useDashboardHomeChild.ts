import { useFindAllChild } from "@/hooks/data/useChild";
import { useFindChildMetrics } from "@/hooks/data/useMetrics";
import { useEffect, useState } from "react";

const useDashboardHomeChild = (guardianId: string) => {
	const [openCombobox, setOpenCombobox] = useState(false);
	const [childValue, setChildValue] = useState("");

	const {
		data: children,
		isLoading: isLoadingChildren,
		isError: isErrorChildren,
	} = useFindAllChild(guardianId);

	const {
		data: childMetrics,
		isLoading: isLoadingMetrics,
		isError: isErrorMetrics,
	} = useFindChildMetrics(+childValue);

	useEffect(() => {
		if (children) {
			setChildValue(`${children[0].id}`);
		}
	}, [children]);

	return {
		children,
		childValue,
		childMetrics,
		isLoading: isLoadingChildren || isLoadingMetrics,
		isError: isErrorChildren || isErrorMetrics,
		openCombobox,
		setOpenCombobox,
		setChildValue,
	};
};

export default useDashboardHomeChild;
