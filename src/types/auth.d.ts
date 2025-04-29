import { UserType } from "./user";

declare namespace AuthType {
	type Response = {
		data: Login;
		message: string;
		status: number;
	};

	type Login = {
		accessToken: string;
		refreshToken: string;
		user: UserType.User;
	};
}
