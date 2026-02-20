import "dotenv/config";
import { PrismaClient } from "./prisma/generated/prisma/index.js";
import { PrismaNeon } from "@prisma/adapter-neon";

const adapter = new PrismaNeon({
  connectionString: process.env.DATABASE_URL,
});

export const db = new PrismaClient({ adapter });
