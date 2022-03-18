import { FastifyPluginAsync } from "fastify";
import {
  CommentDto,
  CommentGetAllSchema,
  InternalServerErrorSchema,
  NotFoundSchema,
  PostId,
  PostIdSchema,
} from "../../../../../application";

const getComment: FastifyPluginAsync = async fastify => {
  fastify.get<{
    Params: {
      postId: PostId;
    };
    Reply: CommentDto[];
  }>(
    "/",
    {
      schema: {
        tags: ["Comments"],
        params: {
          postId: PostIdSchema,
        },
        response: {
          200: CommentGetAllSchema,
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

export default getComment;
