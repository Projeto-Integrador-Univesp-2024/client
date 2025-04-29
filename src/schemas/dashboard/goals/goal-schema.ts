import { z } from "zod";

export const DashboardGoalFormSchema = z.object({
	title: z.string(),
	points: z.coerce.number(),
	childId: z.coerce.number(),
});

export type DashboardGoalFormValues = z.infer<typeof DashboardGoalFormSchema>;
