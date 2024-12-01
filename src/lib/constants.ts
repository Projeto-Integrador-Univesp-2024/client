export const BackendURL = process.env.BACKEND_URL ?? "http://localhost:5000";

export enum UserTypeEnum {
  ADMIN = "ADMIN",
  GUARDIAN = "GUARDIAN",
  CHILD = "CHILD",
}
