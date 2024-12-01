import { useFindAllChild } from "@/hooks/data/useChild";

const useDashboardChild = (publicId: string) => {
  const { data: children, isLoading, isError } = useFindAllChild(publicId);

  return { children, isLoading, isError };
};

export default useDashboardChild;
