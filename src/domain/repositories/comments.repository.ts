import { Comment, Post, User } from "../entities";

export interface ICommentsRepository {
  findById(id: number): Promise<Comment | null>;
  create(comment: Comment, post: Post, user: User): Promise<Comment>;
  update(comment: Comment): Promise<Comment>;
  delete(commentId: number): Promise<Comment>;
}
