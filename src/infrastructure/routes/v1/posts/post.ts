import { FastifyPluginAsync } from "fastify";
import {
  InternalServerErrorSchema,
  PostDto,
  PostGetAllSchema,
  PostPostDto,
  PostPostSchema,
} from "../../../../application";

const postPost: FastifyPluginAsync = async fastify => {
  fastify.post<{
    Body: PostPostDto;
    Reply: PostDto;
  }>(
    "/",
    {
      schema: {
        tags: ["Posts"],
        body: PostPostSchema,
        response: {
          201: PostGetAllSchema,
          500: InternalServerErrorSchema,
        },
      },
    },
    async (req, res) => {
      res.code(201).send();
    }
  );
};

export default postPost;
