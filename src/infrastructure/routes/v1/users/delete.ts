import { FastifyPluginAsync } from "fastify";
import {
  InternalServerErrorSchema,
  NotFoundSchema,
  UserDto,
  UserGetSchema,
  UserId,
  UserIdSchema,
} from "../../../../application";

const deleteUser: FastifyPluginAsync = async fastify => {
  fastify.delete<{
    Params: {
      id: UserId;
    };
    Reply: UserDto;
  }>(
    "/:id",
    {
      schema: {
        tags: ["Users"],
        params: {
          id: UserIdSchema,
        },
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

export default deleteUser;
