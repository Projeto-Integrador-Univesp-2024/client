import { useQuery } from "@tanstack/react-query";
import { ChildClass } from "@/action/child.action";

const childClass = new ChildClass();

export const useFindOneChild = (publicId: string) => {
	return useQuery({
		queryKey: ["oneChild", publicId],
		queryFn: () => childClass.findOne(publicId),
		enabled: !!publicId,
	});
};

export const useFindAllChild = (publicId: string) => {
	return useQuery({
		queryKey: ["allGuardianChild", publicId],
		queryFn: () => childClass.findAll(publicId),
		enabled: !!publicId,
	});
};
