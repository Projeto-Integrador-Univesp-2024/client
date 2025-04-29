import { UserTypeType } from "./user-type";

declare namespace UserType {
	type Response = {
		data: User;
		message: string;
		status: number;
	};
	type User = {
		id: number;
		publicId: string;
		userTypeId: number;
		name: string;
		email: string;
		password: string;
		emailVerified?: string | null;
		dateOfBirth: string;
		age: number;
		image?: string | null;
		userType: UserTypeType.Response;
		createdAt: string;
		updatedAt: string;
		deletedAt?: string | null;
	};
}
