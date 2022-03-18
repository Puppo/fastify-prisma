import { Post } from "../../domain";
import { PostDto } from "../dtos";
import { mapUserToLookupDto } from "./users.mapper";

export function mapPostToDto(post: Post): PostDto {
  return {
    id: post.id,
    title: post.title,
    content: post.content,
    createdAt: post.createdAt,
    tags: post.tags.slice(),
    user: mapUserToLookupDto(post.user),
  };
}
