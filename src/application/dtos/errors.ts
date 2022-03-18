import { Static } from "@sinclair/typebox";
import { InternalServerErrorSchema, NotFoundSchema } from "../schemas";

export type NotFoundDto = Static<typeof NotFoundSchema>;

export type InternalServerErrorDto = Static<typeof InternalServerErrorSchema>;
