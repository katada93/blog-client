import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../../api';
import { IUser } from '../../../types';
import { IAuthState, IErrorRequest, ISuccessRequest } from './types';

export const login = createAsyncThunk(
  'auth/login',
  async (params: { email: string; password: string }, thunkAPI) => {
    try {
      const response = await API.login(params.email, params.password);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const me = createAsyncThunk('auth/me', async (_, thunkAPI) => {
  try {
    const response = await API.me();

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('Пользователь не авторизован.');
  }
});

const initialState: IAuthState = {
  isAuth: false,
  user: {} as IUser,
  loading: false,
  error: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [login.pending.type]: (state) => {
      state.loading = true;
    },
    [login.fulfilled.type]: (
      state,
      { payload }: PayloadAction<ISuccessRequest>
    ) => {
      console.log(payload);
      localStorage.setItem('token', payload.token);
      state.isAuth = true;
      state.user = payload.user;
      state.loading = false;
      state.error = '';
    },
    [login.rejected.type]: (
      state,
      { payload }: PayloadAction<IErrorRequest>
    ) => {
      state.error = payload.message;
      state.loading = false;
    },
    [me.fulfilled.type]: (state, { payload }: PayloadAction<IUser>) => {
      state.isAuth = true;
      state.user = payload;
    },
    [me.rejected.type]: (state, { payload }: PayloadAction<string>) => {
      state.error = payload;
    },
  },
});

// export const { setUser } = authSlice.actions;

export default authSlice.reducer;
