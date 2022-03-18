import { FastifyPluginAsync } from "fastify";
import {
  CommentCommentDto,
  CommentDto,
  CommentGetSchema,
  CommentPostSchema,
  InternalServerErrorSchema,
  PostId,
  PostIdSchema,
} from "../../../../../application";

const CommentComment: FastifyPluginAsync = async fastify => {
  fastify.post<{
    Params: {
      postId: PostId;
    };
    Body: CommentCommentDto;
    Reply: CommentDto;
  }>(
    "/",
    {
      schema: {
        tags: ["Comments"],
        params: {
          postId: PostIdSchema,
        },
        body: CommentPostSchema,
        response: {
          201: CommentGetSchema,
          500: InternalServerErrorSchema,
        },
      },
    },
    async (req, res) => {
      res.code(201).send();
    }
  );
};

export default CommentComment;
