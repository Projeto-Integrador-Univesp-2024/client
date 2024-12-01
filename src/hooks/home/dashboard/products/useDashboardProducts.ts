import { useFindProducts } from "@/hooks/data/useProducts";

const useDashboardProducts = (guardianId: string) => {
  const { data: products, isLoading, isError } = useFindProducts(guardianId);
  return { products, isLoading, isError };
};

export default useDashboardProducts;
