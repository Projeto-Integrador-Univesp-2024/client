export { default } from "next-auth/middleware";

export const config = {
	matcher: ["/dashboard/:path*", "/:userId/:path*"],
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function middleware(req: { url: any }) {
	console.log("Middleware is running on route:", req.url);
}
