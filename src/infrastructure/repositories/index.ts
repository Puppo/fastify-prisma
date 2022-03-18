import { asClass, Lifetime } from "awilix";
import { diContainer } from "fastify-awilix";
import { ICommentsRepository, IPostsRepository } from "../../domain";
import { CommentsRepository } from "./comments.repository";
import { PostsRepository } from "./posts.repository";

declare module "fastify-awilix" {
  interface Cradle {
    postsRepository: IPostsRepository;
    commentsRepository: ICommentsRepository;
  }
}

diContainer.register({
  postsRepository: asClass(PostsRepository, {
    lifetime: Lifetime.SINGLETON,
  }),
  commentsRepository: asClass(CommentsRepository, {
    lifetime: Lifetime.SINGLETON,
  }),
});
