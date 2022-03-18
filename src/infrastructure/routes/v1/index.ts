import { FastifyPluginAsync } from "fastify";

const v1: FastifyPluginAsync = async server => {
  await server.register(import("./users"), { prefix: "/users" });
  await server.register(import("./posts"), { prefix: "/posts" });
};

export default v1;
