import { FastifyPluginAsync } from "fastify";
import {
  InternalServerErrorSchema,
  NotFoundSchema,
  PostDto,
  PostGetAllSchema,
  PostId,
  PostIdSchema,
} from "../../../../application";

const deletePost: FastifyPluginAsync = async fastify => {
  fastify.delete<{
    Params: {
      id: PostId;
    };
    Reply: PostDto;
  }>(
    "/:id",
    {
      schema: {
        tags: ["Posts"],
        params: {
          id: PostIdSchema,
        },
        response: {
          200: PostGetAllSchema,
          404: NotFoundSchema,
          500: InternalServerErrorSchema,
        },
      },
    },
    async (req, res) => {
      res.send();
    }
  );
};

export default deletePost;
