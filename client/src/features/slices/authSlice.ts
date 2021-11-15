import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../api';
import { IUser } from '../../types';

interface IAuthState {
  isAuth: boolean;
  user: IUser | object;
  loading: boolean;
  error: string;
}

const initialState: IAuthState = {
  isAuth: false,
  user: {},
  loading: false,
  error: '',
};

export const authSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<object>) => {
      state.isAuth = true;
      state.user = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;

export const login =
  (email: string, password: string) => async (dispatch: any) => {
    try {
      const { data } = await API.login(email, password);
      localStorage.setItem('token', data.token);
      dispatch(setUser(data));
    } catch (error) {
      console.log(error);
    }
  };

export default authSlice.reducer;
