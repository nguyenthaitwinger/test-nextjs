export interface SignInPropType {
  email: string;
  password: string;
}

export interface params {
  s?: string;
  page: number;
  orderBy?: string;
  category?: string;
  technologies?: string;
  location?: string;
  badge?: string;
}

export type Auth = {
  accessToken: string;
  expiredAt: string;
  refreshToken: string;
  email?: string;
};
