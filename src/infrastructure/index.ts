import fastify from "fastify";
import { fastifyAwilixPlugin } from "fastify-awilix";
import { RouteGenericInterface } from "fastify/types/route";
import {
  InternalServerErrorDto,
  NotFoundDto,
  NotFoundError,
} from "../application";
import { EnvSchema } from "./config/env.schema";
import "./db";
import "./repositories";

const server = fastify({
  logger: true,
});

server.setErrorHandler<
  Error,
  RouteGenericInterface & { Reply: NotFoundDto | InternalServerErrorDto }
>((error, req, res) => {
  if (error instanceof NotFoundError) {
    const errorDto: NotFoundDto = {
      statusCode: 404,
      error: "Not Found",
      message: error.message,
    };
    res.code(404).send(errorDto);
    return;
  }

  res.code(500).send({
    statusCode: 500,
    error: "Internal Server Error",
  });
});

server.register(import("fastify-env"), {
  dotenv: true,
  schema: EnvSchema,
});

server.register(fastifyAwilixPlugin, {
  disposeOnClose: true,
  disposeOnResponse: true,
});

server.register(import("fastify-cors"));
server.register(import("./routes/v1"), { prefix: "/api/v1" });

server.register(import("fastify-swagger"), {
  routePrefix: "/api/documentation",
  swagger: {
    info: {
      title: "Blog API",
      description: "A simple blog API",
      version: "1.0.0",
    },
    consumes: ["application/json"],
    produces: ["application/json"],
  },
  uiConfig: {
    docExpansion: "full",
    deepLinking: false,
  },
  uiHooks: {
    onRequest: function (request, reply, next) {
      next();
    },
    preHandler: function (request, reply, next) {
      next();
    },
  },
  staticCSP: true,
  transformStaticCSP: header => header,
  exposeRoute: true,
});

server.ready(err => {
  if (err) throw err;
  server.swagger();
});

export default server;
