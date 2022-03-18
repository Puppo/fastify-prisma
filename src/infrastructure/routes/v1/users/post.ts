import { FastifyPluginAsync } from "fastify";
import {
  InternalServerErrorSchema,
  PostUserDto,
  UserDto,
  UserGetSchema,
  UserPostSchema,
} from "../../../../application";

const postUser: FastifyPluginAsync = async fastify => {
  fastify.post<{
    Body: PostUserDto;
    Reply: UserDto;
  }>(
    "/",
    {
      schema: {
        tags: ["Users"],
        body: UserPostSchema,
        response: {
          201: UserGetSchema,
          500: InternalServerErrorSchema,
        },
      },
    },
    async (req, res) => {
      res.code(201).send();
    }
  );
};

export default postUser;
