import { UserType } from "./user";

declare namespace ChildType {
	interface Response extends Child {
		user: UserType.User;
		guardian: UserType.User;
	}

	type Child = {
		id: number;
		userId: number;
		guardianId: number;
		points: number;
		tasksNeedsApproval: boolean;
		createdAt: string;
		updatedAt: string;
		deletedAt?: string;
		user: UserType.User;
	};
}
