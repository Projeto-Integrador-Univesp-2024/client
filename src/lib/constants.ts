export const BackendURL = process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:5000";

export enum UserTypeEnum {
  ADMIN = "ADMIN",
  GUARDIAN = "GUARDIAN",
  CHILD = "CHILD",
}
