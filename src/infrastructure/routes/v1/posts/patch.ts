import { FastifyPluginAsync } from "fastify";
import {
  InternalServerErrorSchema,
  NotFoundSchema,
  PatchPostDto,
  PostDto,
  PostGetAllSchema,
  PostId,
  PostIdSchema,
  PostPatchSchema,
} from "../../../../application";

const patchPost: FastifyPluginAsync = async fastify => {
  fastify.patch<{
    Params: {
      id: PostId;
    };
    Body: PatchPostDto;
    Reply: PostDto;
  }>(
    "/:id",
    {
      schema: {
        tags: ["Posts"],
        params: {
          id: PostIdSchema,
        },
        body: PostPatchSchema,
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

export default patchPost;
