import { z } from "zod";

export const SignUpFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  dateOfBirth: z.string(),
  password: z
    .string()
    .min(8)
    .regex(
      /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/,
      "Senha precisa ter:\n- 1 letra maiúscula\n- 1 caractere especial\n- 1 número\n- 1 letra minúscula",
    ),
  terms: z.boolean().refine((term) => {
    if (term) {
      return true;
    }

    return false;
  }, "Deve aceitar os termos e direitos antes"),
});

export type SignUpFormValues = z.infer<typeof SignUpFormSchema>;
