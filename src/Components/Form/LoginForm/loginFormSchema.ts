import { z } from "zod";

export const loginFormSchema = z.object({
  email: z
    .string()
    .email("Forneça um e-mail válido"),
  password: z.string().nonempty("A senha é obrigatória"),
});

export type TLoginFormValues = z.infer<typeof loginFormSchema>;