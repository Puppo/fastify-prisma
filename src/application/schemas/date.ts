import { TSchema, TString, Type } from "@sinclair/typebox";

export const DateKind = Symbol("DateKind");
export interface TDate extends TSchema {
  type: "string";
  $static: Date;
  kind: typeof DateKind;
}
export const TypeDate = Type.String({
  pattern: "^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}.[0-9]{3}Z$",
}) as TString | TDate;
