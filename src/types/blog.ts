import { Author } from './author';
import { Comment } from './comment';
import { Reaction } from './reaction';
import { BlogRating } from './rating';
export interface BlogResponse {
  blogId: string;
  title: string;
  content: string;
  slug: string;
  updatedAt?: string;
  thumbsUp?: number;
  wow?: number;
  heart?: number;
  rating1: number;
  rating2: number;
  rating3: number;
  rating4: number;
  rating5: number;
  user: Author;
  comments: Comment[];
}

export interface Blog {
  blogId: string;
  title: string;
  content: string;
  slug: string;
  published: boolean;
  updatedAt?: string;
  user: Author;
  reaction: Reaction;
  comments: Comment[];
  blogRating: BlogRating;
}

export interface CreateUpdateBlogParams {
  blogId?: string;
  title: string;
  content: string;
  slug: string;
  author?: string;
  published: boolean;
}

export type BlogCRUDType = 'create' | 'update';
