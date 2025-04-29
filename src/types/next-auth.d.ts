import { DefaultSession } from "next-auth";

declare module "next-auth" {
	interface Session {
		user: {
			id: string;
			publicId: string;
		} & DefaultSession["user"];
		accessToken: string;
	}

	interface User {
		id: string;
		publicId: string;
		email: string;
		accessToken: string;
	}
}
