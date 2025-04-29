import { UserTypeEnum } from "@/lib/constants";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFindOneUser } from "../data/useUser";

const useHomePage = (
	data: Session | null,
	status: "authenticated" | "loading" | "unauthenticated",
) => {
	const router = useRouter();

	const {
		data: user,
		isLoading,
		isError,
	} = useFindOneUser(data ? +data.user.id : null);

	useEffect(() => {
		if (status === "unauthenticated") {
			router.push("/auth/signin");
			return;
		}

		if (status === "authenticated" && user) {
			const publicId = data!.user.publicId;
			if (user.userType.name === UserTypeEnum.CHILD) {
				router.push(`/${publicId}/app`);
			} else if (user.userType.name === UserTypeEnum.GUARDIAN) {
				router.push(`/${publicId}/dashboard`);
			}
		}
	}, [data, router, status, user]);

	return { isLoading, isError };
};

export default useHomePage;
