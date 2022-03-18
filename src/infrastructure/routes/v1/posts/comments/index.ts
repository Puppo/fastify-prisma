import { FastifyPluginAsync } from "fastify";

const commentsRoutes: FastifyPluginAsync = async server => {
  server.register(import("./post"));
  server.register(import("./get"));
  server.register(import("./getAll"));
  server.register(import("./patch"));
  server.register(import("./delete"));
};

export default commentsRoutes;
