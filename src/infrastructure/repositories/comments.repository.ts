import { PrismaClient } from "@prisma/client";
import { Comment, ICommentsRepository, Post, User } from "../../domain";
import { mapComment } from "../utils";

export class CommentsRepository implements ICommentsRepository {
  constructor(private readonly client: PrismaClient) {}

  async findById(id: number): Promise<Comment | null> {
    const comment = await this.client.commentTable.findUnique({
      where: { id },
    });
    return comment ? mapComment(comment) : null;
  }

  async create(comment: Comment, post: Post, user: User): Promise<Comment> {
    const newComment = await this.client.commentTable.create({
      data: {
        content: comment.content,
        post: { connect: { id: post.id } },
        user: { connect: { id: user.id } },
      },
    });
    return mapComment(newComment);
  }

  async update(comment: Comment): Promise<Comment> {
    const updatedComment = await this.client.commentTable.update({
      where: { id: comment.id },
      data: {
        content: comment.content,
      },
    });
    return mapComment(updatedComment);
  }

  async delete(commentId: number): Promise<Comment> {
    const deletedComment = await this.client.commentTable.delete({
      where: { id: commentId },
    });
    return mapComment(deletedComment);
  }
}
