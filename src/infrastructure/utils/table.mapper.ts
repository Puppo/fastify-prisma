import { CommentTable, PostTable, TagTable, UserTable } from "@prisma/client";
import { Comment, Post } from "../../domain";

export function mapComment(comment: CommentTable): Comment {
  return {
    id: comment.id,
    content: comment.content,
    createdAt: comment.createdAt,
  };
}

export function mapPost(
  post: PostTable & { user: UserTable; tags: TagTable[] }
): Post {
  return {
    id: post.id,
    title: post.title,
    content: post.content,
    createdAt: post.createdAt,
    tags: post.tags,
    user: {
      id: post.user.id,
      firstName: post.user.firstName,
      lastName: post.user.lastName,
      username: post.user.username,
    },
  };
}
