export type Errors = {
  username?: string;
  password?: string;
  confPassword?: string;
  apiError?: string;
};

export type User = {
  _id: string | undefined;
  username: string;
  refreshToken: string;
  avatar: string;
};

export type UserFields = {
  username: string;
  password: string;
  confPassword?: string;
};
