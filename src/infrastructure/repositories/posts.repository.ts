import { PrismaClient } from "@prisma/client";
import { Comment, IPostsRepository, Post, User } from "../../domain";
import { mapComment, mapPost } from "../utils";

type PostsRepositoryDeps = Readonly<{
  prisma: PrismaClient;
}>;

export class PostsRepository implements IPostsRepository {
  constructor(private readonly deps: PostsRepositoryDeps) {}

  async findAll(): Promise<ReadonlyArray<Post>> {
    const posts = await this.deps.prisma.postTable.findMany({
      include: { user: true, tags: true },
    });
    return posts.map(mapPost);
  }

  async findById(id: number): Promise<Post | null> {
    const post = await this.deps.prisma.postTable.findUnique({
      where: { id },
      include: { user: true, tags: true },
    });
    return post ? mapPost(post) : null;
  }

  async create(post: Post, user: User): Promise<Post> {
    const newPost = await this.deps.prisma.postTable.create({
      data: {
        title: post.title,
        content: post.content,
        user: { connect: { id: user.id } },
      },
      include: { user: true, tags: true },
    });
    return mapPost(newPost);
  }

  async update(post: Post): Promise<Post> {
    const updatedPost = await this.deps.prisma.postTable.update({
      where: { id: post.id },
      data: {
        title: post.title,
        content: post.content,
      },
      include: { user: true, tags: true },
    });
    return mapPost(updatedPost);
  }

  async delete(postId: number): Promise<Post> {
    const deletedPost = await this.deps.prisma.postTable.delete({
      where: { id: postId },
      include: { user: true, tags: true },
    });
    return mapPost(deletedPost);
  }

  async findAllComments(postId: number): Promise<ReadonlyArray<Comment>> {
    const comments = await this.deps.prisma.commentTable.findMany({
      where: { post: { id: postId } },
    });
    return comments.map(mapComment);
  }

  async findCommentById(
    postId: number,
    commentId: number
  ): Promise<Comment | null> {
    const post = await this.deps.prisma.postTable.findFirst({
      where: { id: postId },
      include: { comments: { where: { id: commentId } } },
    });
    if (!post || post.comments.length === 0) return null;
    return mapComment(post.comments[0]);
  }
}
