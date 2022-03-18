import { PrismaClient } from "@prisma/client";
import { asFunction, Lifetime } from "awilix";
import { diContainer } from "fastify-awilix";

declare module "fastify-awilix" {
  interface Cradle {
    prisma: PrismaClient;
  }
}

diContainer.register({
  prisma: asFunction(
    () =>
      new PrismaClient({
        datasources: {
          db: {
            url: process.env.DATABASE_URL,
          },
        },
        log: ["info", "query", "warn"],
      }),
    {
      lifetime: Lifetime.SINGLETON,
      dispose: module => module.$disconnect(),
    }
  ),
});
