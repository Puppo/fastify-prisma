import { Static, Type } from "@sinclair/typebox";

const Env = Type.Object({
  DATABASE_URL: Type.String(),
  PORT: Type.Number(),
});

type Env = Static<typeof Env>;

declare module "fastify" {
  interface FastifyInstance {
    config: Env;
  }
}

export const EnvSchema = {
  type: "object",
  required: ["DATABASE_URL", "PORT"],
  properties: {
    PORT: {
      type: "string",
      default: 3000,
    },
    DATABASE_URL: {
      type: "string",
    },
  },
};
