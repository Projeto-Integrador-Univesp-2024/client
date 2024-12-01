import { z } from "zod";

export const DashboardTaskFormSchema = z.object({
  name: z.string(),
  points: z.coerce.number(),
  deadline: z.string(),
  taskTypeId: z.number(),
});

export type DashboardTaskFormValues = z.infer<typeof DashboardTaskFormSchema>;
