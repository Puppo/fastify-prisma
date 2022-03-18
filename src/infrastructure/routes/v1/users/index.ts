import { FastifyPluginAsync } from "fastify";

const usersRoutes: FastifyPluginAsync = async server => {
  server.register(import("./get"));
  server.register(import("./post"));
  server.register(import("./put"));
  server.register(import("./patch"));
  server.register(import("./delete"));
};

export default usersRoutes;
