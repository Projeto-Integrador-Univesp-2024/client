import { z } from "zod";

export enum RecurrenceTypeEnum {
  DAY = "DAY",
  WEEK = "WEEK",
  MONTH = "MONTH",
  YEAR = "YEAR",
}

export const DashboardTaskTypeFormSchema = z.object({
  name: z.string(),
  recurrence: z.coerce.number(),
  recurrenceType: z.nativeEnum(RecurrenceTypeEnum).optional(),
  color: z.string(),
});

export type DashboardTaskTypeFormValues = z.infer<
  typeof DashboardTaskTypeFormSchema
>;
