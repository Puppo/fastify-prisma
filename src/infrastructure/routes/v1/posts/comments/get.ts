import { FastifyPluginAsync } from "fastify";
import {
  CommentDto,
  CommentGetSchema,
  CommentId,
  CommentIdSchema,
  InternalServerErrorSchema,
  NotFoundSchema,
  PostId,
  PostIdSchema,
} from "../../../../../application";

const getComment: FastifyPluginAsync = async fastify => {
  fastify.get<{
    Params: {
      postId: PostId;
      id: CommentId;
    };
    Reply: CommentDto;
  }>(
    "/:id",
    {
      schema: {
        tags: ["Comments"],
        params: {
          postId: PostIdSchema,
          id: CommentIdSchema,
        },
        response: {
          200: CommentGetSchema,
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
