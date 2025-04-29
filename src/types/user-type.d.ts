import { UserType } from "@/lib/constants";

declare namespace UserTypeType {
	type Response = {
		id: number;
		name: UserType;
		createdAt: string;
		updatedAt: string;
		deletedAt?: string;
	};
}
