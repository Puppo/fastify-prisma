import { Static } from "@sinclair/typebox";
import {
  UserGetSchema,
  UserIdSchema,
  UserLookupSchema,
  UserPatchSchema,
  UserPostSchema,
  UserPutSchema,
} from "../schemas";

export type UserId = Static<typeof UserIdSchema>;

export type UserDto = Static<typeof UserGetSchema>;

export type UserLookupDto = Static<typeof UserLookupSchema>;

export type PostUserDto = Static<typeof UserPostSchema>;

export type PutUserDto = Static<typeof UserPutSchema>;

export type PatchUserDto = Static<typeof UserPatchSchema>;
