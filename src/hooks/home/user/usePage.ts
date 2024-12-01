import { useFindOneChild } from "../../data/useChild";

const useUserPage = (publicId: string) => {
  const { data: userChild, isLoading, isError } = useFindOneChild(publicId);

  return { userChild, isLoading, isError };
};

export default useUserPage;
