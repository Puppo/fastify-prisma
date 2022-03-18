import { FastifyPluginAsync } from "fastify";
import {
  InternalServerErrorSchema,
  NotFoundSchema,
  PostUserDto,
  UserDto,
  UserGetSchema,
  UserId,
  UserIdSchema,
  UserPutSchema,
} from "../../../../application";

const putUser: FastifyPluginAsync = async fastify => {
  fastify.put<{
    Params: {
      id: UserId;
    };
    Body: PostUserDto;
    Reply: UserDto;
  }>(
    "/:id",
    {
      schema: {
        tags: ["Users"],
        params: {
          id: UserIdSchema,
        },
        body: UserPutSchema,
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

export default putUser;
