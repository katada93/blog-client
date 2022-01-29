import { IUser } from '../../../types';

export interface IErrorRequest {
  message: string;
}

export interface ISuccessRequest {
  status: string;
  token: string;
  user: IUser;
}

export interface IAuthState {
  isAuth: boolean;
  user: IUser;
  loading: boolean;
  error: string | Error;
}
