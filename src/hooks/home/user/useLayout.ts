import { MenuItems } from "@/components/app/menu/items";
import { useFindOneChild } from "@/hooks/data/useChild";
import { Session } from "next-auth";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const useUserLayout = (
  session: Session | null,
  status: string,
  publicId: string,
  router: AppRouterInstance,
  pathname: string,
) => {
  const items = MenuItems({ userId: publicId });
  const validatePath = pathname !== `/${publicId}/app`;

  const { data: userChild, isLoading, isError } = useFindOneChild(publicId);

  if (status === "unauthenticated" && !session) {
    router.push("/auth/signin");
  }

  return { items, validatePath, userChild, isLoading, isError };
};

export default useUserLayout;
