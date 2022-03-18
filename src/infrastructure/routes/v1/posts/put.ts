import { FastifyPluginAsync } from "fastify";
import {
  InternalServerErrorSchema,
  NotFoundSchema,
  PostDto,
  PostGetAllSchema,
  PostId,
  PostIdSchema,
  PostPostDto,
  PostPutSchema,
} from "../../../../application";

const putPost: FastifyPluginAsync = async fastify => {
  fastify.put<{
    Params: {
      id: PostId;
    };
    Body: PostPostDto;
    Reply: PostDto;
  }>(
    "/:id",
    {
      schema: {
        tags: ["Posts"],
        params: {
          id: PostIdSchema,
        },
        body: PostPutSchema,
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

export default putPost;
