import { FastifyPluginAsync } from "fastify";
import {
  InternalServerErrorSchema,
  mapPostToDto,
  PostDto,
  PostGetAllSchema,
} from "../../../../application";

const getAllPost: FastifyPluginAsync = async fastify => {
  fastify.get<{
    Reply: PostDto[];
  }>(
    "/",
    {
      schema: {
        tags: ["Posts"],
        response: {
          200: PostGetAllSchema,
          500: InternalServerErrorSchema,
        },
      },
    },
    async (req, res) => {
      const posts = await fastify.diContainer.cradle.postsRepository.findAll();
      const results = posts.map(mapPostToDto);
      res.send(results);
    }
  );
};

export default getAllPost;
