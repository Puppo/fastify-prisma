import { FastifyPluginAsync } from "fastify";

const postsRoutes: FastifyPluginAsync = async server => {
  server.register(import("./get"));
  server.register(import("./getAll"));
  server.register(import("./post"));
  server.register(import("./put"));
  server.register(import("./patch"));
  server.register(import("./delete"));
  await server.register(import("./comments"), { prefix: "/:postId/comments" });
};

export default postsRoutes;
