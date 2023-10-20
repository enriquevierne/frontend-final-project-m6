import { z } from "zod";

export const registerFormSchema = z
  .object({
    name: z
      .string()
      .min(3, "O nome é obrigatório e precisa conter pelo menos 3 caracteres."),
    email: z.string().email("Forneça um e-mail válido."),
    password: z
      .string()
      .min(7, "A senha precisa conter pelo menos 7 caracteres.")
      .regex(
        /(?=.*?[#?!@$%^&*-])/,
        "É necessário pelo menos um caracter especial."
      )
      .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula.")
      .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula.")
      .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número."),
    confirm: z.string().nonempty("É obrigatório confirmar a senha."),
    document: z
      .string()
      .length(
        11,
        "O documento é obrigatório e precisa conter exatamente 11 caracteres."
      ),
    mobile: z
      .string()
      .length(
        11,
        "O número de celular é obrigatório e precisa conter exatamente 11 caracteres."
      ),
    birthdate: z.string().datetime({ message: "Precisa ser uma data válida." }),
    bio: z
      .string()
      .min(1, "O campo é obrigatório")
      .max(255, "O campo precisa ter menos de 255 caracteres."),
    type: z.boolean(),
    address: z.object({
      zip: z.string().length(8, "O cep precisa conter 8 caracteres."),
      street: z.string().min(1, "A rua é obrigatória."),
      city: z.string().min(1, "A cidade é obrigatória."),
      state: z.string().length(2, "O estado(UF) é obrigatório."),
      number: z.string().min(1, "O número é obrigatório."),
      complement: z
        .string()
        .min(1, "O complemento é obrigatória.")
        .max(255, "O campo precisa ter menos de 255 caracteres."),
    }),
  })
  .refine(({ password, confirm }) => password === confirm, {
    message: "A confirmação de senha precisa corresponder com a senha.",
    path: ["confirm"],
  });

export type TRegisterFormValues = z.infer<typeof registerFormSchema>;
