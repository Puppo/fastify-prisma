import { Type } from "@sinclair/typebox";
import { TypeDate } from "./date";
import { UserLookupSchema } from "./users";

export const PostIdSchema = Type.Number();

const TagsSchema = Type.Array(
  Type.Object({
    id: Type.Number(),
    name: Type.String(),
  })
);

export const PostGetSchema = Type.Object({
  id: PostIdSchema,
  title: Type.String(),
  content: Type.String(),
  tags: TagsSchema,
  user: UserLookupSchema,
  createdAt: TypeDate,
});

export const PostGetAllSchema = Type.Array(PostGetSchema);

export const PostPostSchema = Type.Object({
  title: Type.String(),
  content: Type.String(),
  tags: TagsSchema,
});

export const PostPutSchema = PostPostSchema;

export const PostPatchSchema = Type.Partial(PostPostSchema);
