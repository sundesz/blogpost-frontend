import { Blog } from './blog';
import { User } from './user';

export type Author = User & {
  blogs?: Blog[];
  imageId: string;
};

export type AuthorNames = Omit<User, 'email'>;
