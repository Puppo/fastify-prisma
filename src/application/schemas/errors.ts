import { Type } from "@sinclair/typebox";

export const NotFoundSchema = Type.Object({
  statusCode: Type.Literal(404),
  error: Type.Literal("Not Found"),
  message: Type.String(),
});

export const InternalServerErrorSchema = Type.Object({
  statusCode: Type.Literal(500),
  error: Type.Literal("Internal Server Error"),
});
