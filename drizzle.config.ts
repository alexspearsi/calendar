import { config } from 'dotenv';
import { defineConfig } from "drizzle-kit";

config({ path: '.env' });
if (!process.env.DATABASE_URL) throw new Error("can't find db url in .env");
export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});
