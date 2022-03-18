import { Static } from "@sinclair/typebox";
import {
  PostGetSchema,
  PostIdSchema,
  PostPatchSchema,
  PostPostSchema,
  PostPutSchema,
} from "../schemas";

export type PostId = Static<typeof PostIdSchema>;

export type PostDto = Static<typeof PostGetSchema>;

export type PostPostDto = Static<typeof PostPostSchema>;

export type PutPostDto = Static<typeof PostPutSchema>;

export type PatchPostDto = Static<typeof PostPatchSchema>;
