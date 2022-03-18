import { FastifyPluginAsync } from "fastify";
import {
  CommentDto,
  CommentGetSchema,
  CommentId,
  CommentIdSchema,
  CommentPatchDto,
  CommentPatchSchema,
  InternalServerErrorSchema,
  NotFoundSchema,
  PostId,
  PostIdSchema,
} from "../../../../../application";

const patchComment: FastifyPluginAsync = async fastify => {
  fastify.patch<{
    Params: {
      postId: PostId;
      id: CommentId;
    };
    Body: CommentPatchDto;
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
        body: CommentPatchSchema,
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

export default patchComment;
