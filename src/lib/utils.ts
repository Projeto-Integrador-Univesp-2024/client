import { AuthType } from "@/types/auth";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isLogin(data: any): data is AuthType.Login {
  return (
    typeof data === "object" &&
    "accessToken" in data &&
    "refreshToken" in data &&
    "user" in data &&
    typeof data.user === "object"
  );
}
