import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
  HTTP_PORT: z.string(),
});

let parsed: z.infer<typeof envSchema>;

export const getEnv = () => {
  if (parsed) return parsed;
  parsed = envSchema.parse(process.env);

  return parsed;
};
