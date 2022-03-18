import { User } from "./users";

type Tags = Readonly<{
  id: number;
  name: string;
}>;

export type Post = Readonly<{
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  tags: ReadonlyArray<Tags>;
  user: User;
}>;
