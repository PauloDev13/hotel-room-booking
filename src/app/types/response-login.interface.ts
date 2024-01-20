export interface ResponseLogin {
  message: string;
  result: boolean;
  data: {
    userId: number;
    userName: string;
    password: string;
    role: string;
  };
}
