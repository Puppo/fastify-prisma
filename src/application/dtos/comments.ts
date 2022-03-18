import { Static } from "@sinclair/typebox";
import {
  CommentGetSchema,
  CommentIdSchema,
  CommentPatchSchema,
  CommentPostSchema,
} from "../schemas";

export type CommentId = Static<typeof CommentIdSchema>;

export type CommentDto = Static<typeof CommentGetSchema>;

export type CommentCommentDto = Static<typeof CommentPostSchema>;

export type CommentPatchDto = Static<typeof CommentPatchSchema>;
