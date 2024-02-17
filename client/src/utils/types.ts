export type Error = {
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
