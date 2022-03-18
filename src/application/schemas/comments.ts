import { Type } from "@sinclair/typebox";
import { UserLookupSchema } from "./users";

export const CommentIdSchema = Type.Number();

export const CommentGetSchema = Type.Object({
  id: CommentIdSchema,
  content: Type.String(),
  user: UserLookupSchema,
});

export const CommentGetAllSchema = Type.Array(CommentGetSchema);

export const CommentPostSchema = Type.Object({
  content: Type.String(),
});

export const CommentPatchSchema = CommentPostSchema;
