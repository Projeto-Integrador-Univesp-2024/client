import { ProductClass } from "@/action/product.action";
import { useQuery } from "@tanstack/react-query";

const productClass = new ProductClass();

export const useFindProducts = (guardianId: string) => {
	return useQuery({
		queryKey: ["products", guardianId],
		queryFn: () => productClass.findAll(guardianId),
		enabled: !!guardianId,
	});
};
