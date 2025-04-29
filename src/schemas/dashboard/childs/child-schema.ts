import { z } from "zod";

export const DashboardChildFormSchema = z.object({
	name: z.string(),
	email: z.string().email(),
	dateOfBirth: z.string(),
	password: z
		.string()
		.min(8)
		.regex(
			/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/,
			"Senha precisa ter:\n- 1 letra maiúscula\n- 1 caractere especial\n- 1 número\n- 1 letra minúscula",
		)
		.optional(),
	image: z.string().optional(),
});

export type DashboardChildFormValues = z.infer<typeof DashboardChildFormSchema>;
