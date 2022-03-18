import { FastifyPluginAsync } from "fastify";
import {
  InternalServerErrorSchema,
  NotFoundSchema,
  PatchUserDto,
  UserDto,
  UserGetSchema,
  UserId,
  UserIdSchema,
  UserPatchSchema,
} from "../../../../application";

const patchUser: FastifyPluginAsync = async fastify => {
  fastify.patch<{
    Params: {
      id: UserId;
    };
    Body: PatchUserDto;
    Reply: UserDto;
  }>(
    "/:id",
    {
      schema: {
        tags: ["Users"],
        params: {
          id: UserIdSchema,
        },
        body: UserPatchSchema,
        response: {
          200: UserGetSchema,
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

export default patchUser;
