import { z } from "zod";

export const commentFormSchema = z.object({
  comment_text: z
    .string()
    .min(1, "Comentário vazio."),
});

export type TCommentFormValues = z.infer<typeof commentFormSchema>;
