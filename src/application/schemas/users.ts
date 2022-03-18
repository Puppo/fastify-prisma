import { Type } from "@sinclair/typebox";

export const UserIdSchema = Type.Number();

export const UserLookupSchema = Type.Object({
  id: UserIdSchema,
  name: Type.String(),
});

export const UserGetSchema = Type.Object({
  id: UserIdSchema,
  firstName: Type.String(),
  lastName: Type.String(),
  username: Type.String(),
});

export const UserPostSchema = Type.Object({
  firstName: Type.String(),
  lastName: Type.String(),
  email: Type.String(),
  password: Type.String(),
});

export const UserPutSchema = UserPostSchema;

export const UserPatchSchema = Type.Partial(UserPostSchema);
