import { config } from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";

config({ path: ".env" });
if (!process.env.DATABASE_URL) throw new Error("can't find db url in .env");
export const db = drizzle(process.env.DATABASE_URL);