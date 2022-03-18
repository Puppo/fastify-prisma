import { Comment, Post, User } from "../entities";

export interface IPostsRepository {
  findAll(): Promise<ReadonlyArray<Post>>;
  findById(id: number): Promise<Post | null>;
  create(post: Post, user: User): Promise<Post>;
  update(post: Post): Promise<Post>;
  delete(postId: number): Promise<Post>;

  findAllComments(postId: number): Promise<ReadonlyArray<Comment>>;
  findCommentById(postId: number, commentId: number): Promise<Comment | null>;
}
