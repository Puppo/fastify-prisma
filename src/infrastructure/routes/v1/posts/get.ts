import { FastifyPluginAsync } from "fastify";
import {
  InternalServerErrorSchema,
  mapPostToDto,
  NotFoundDto,
  NotFoundError,
  NotFoundSchema,
  PostDto,
  PostGetSchema,
  PostId,
  PostIdSchema,
} from "../../../../application";

const getPost: FastifyPluginAsync = async fastify => {
  fastify.get<{
    Params: {
      id: PostId;
    };
    Reply: PostDto | NotFoundDto;
  }>(
    "/:id",
    {
      schema: {
        tags: ["Posts"],
        params: {
          id: PostIdSchema,
        },
        response: {
          200: PostGetSchema,
          404: NotFoundSchema,
          500: InternalServerErrorSchema,
        },
      },
    },
    async (req, res) => {
      const post = await fastify.diContainer.cradle.postsRepository.findById(
        req.params.id
      );
      if (!post)
        throw new NotFoundError(`Post with id ${req.params.id} not found`);

      res.send(mapPostToDto(post));
    }
  );
};

export default getPost;
