import { z } from "zod";

export function modifiedErrors(validatedFields: z.ZodError) {
  const fieldErrors = validatedFields.flatten().fieldErrors;
  
  return Object.keys(fieldErrors).reduce((acc, field) => {
    acc[field] = fieldErrors[field]?.[0] || '';
    return acc;
  }, {} as { [key: string]: string });
}