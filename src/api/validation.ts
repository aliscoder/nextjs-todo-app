import { z } from "zod";


export const todoFormSchema = z.object({
  title: z.string().min(3, "At least 3 characters needed"),
  body: z.string().min(10, "At least 10 charcters"),
});
