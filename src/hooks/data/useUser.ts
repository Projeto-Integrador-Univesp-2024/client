import { UserClass } from "@/action/user.action";
import { useQuery } from "@tanstack/react-query";

const userClass = new UserClass();

export const useFindOneUser = (id: number | null) => {
  return useQuery({
    queryKey: ["oneUser", id],
    queryFn: () => userClass.find(id!),
    enabled: !!id,
  });
};
