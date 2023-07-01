export type UserRoleType = 'admin' | 'author' | 'user';

export const UserRole = ['admin', 'author', 'user'] as const;

// export interface NewUserValues {
//   name: string;
//   username: string;
//   password: string;
//   confirmPassword: string;
// }

// export interface UserInfo {
//   userId: string;
//   username: string;
//   name: string;
// }

export interface NewUserResponse {
  message: string;
}

export interface NewUser {
  name: string;
  email: string;
  password: string;
  role: string;
}

export interface User {
  userId: string;
  name: string;
  email: string;
}
