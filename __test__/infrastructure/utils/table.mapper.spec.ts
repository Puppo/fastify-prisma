import { CommentTable, PostTable, TagTable, UserTable } from "@prisma/client";
import { test } from "tap";
import { Comment, Post } from "../../../src/domain";
import { mapComment, mapPost } from "../../../src/infrastructure/utils";

test(`table mapper`, async g => {
  await g.test(`should map a comment table to comment entity`, async t => {
    const commentTable: CommentTable = {
      id: 1,
      content: "Comment content",
      createdAt: new Date(`2020-01-01T00:00:00.000Z`),
      postId: 2,
      updatedAt: new Date(`2020-01-02T00:00:00.000Z`),
      userId: 3,
    };

    const comment = mapComment(commentTable);

    const expected: Comment = {
      id: 1,
      content: "Comment content",
      createdAt: new Date(`2020-01-01T00:00:00.000Z`),
    };
    await t.same(comment, expected);
  });

  await g.test(`should map a post table to post entity`, async t => {
    const postTable: PostTable & { user: UserTable; tags: TagTable[] } = {
      id: 1,
      title: "Post title",
      content: "Post content",
      createdAt: new Date(`2020-01-01T00:00:00.000Z`),
      updatedAt: new Date(`2020-01-02T00:00:00.000Z`),
      userId: 3,
      tags: [
        {
          id: 1,
          name: "Tag name",
        },
      ],
      user: {
        id: 3,
        firstName: "First name",
        lastName: "Last name",
        username: "Username",
        password: "Password",
      },
    };

    const post = mapPost(postTable);
    const expected: Post = {
      id: 1,
      title: "Post title",
      content: "Post content",
      createdAt: new Date(`2020-01-01T00:00:00.000Z`),
      tags: [
        {
          id: 1,
          name: "Tag name",
        },
      ],
      user: {
        id: 3,
        firstName: "First name",
        lastName: "Last name",
        username: "Username",
      },
    };
    await t.same(post, expected);
  });
});
