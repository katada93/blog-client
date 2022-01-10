import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../../api';
import { IUser } from '../../../types';

export const login = createAsyncThunk(
  'auth/login',
  async (params: { email: string; password: string }, thunkAPI) => {
    try {
      const response = await API.login(params.email, params.password);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        'Не удалось авторизоваться. Проверьте данные!'
      );
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

interface IAuthState {
  isAuth: boolean;
  user: IUser;
  loading: boolean;
  error: string | Error;
}

const initialState: IAuthState = {
  isAuth: false,
  user: {} as IUser,
  loading: false,
  error: '',
};

export const authSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: {
    [login.pending.type]: (state) => {
      state.loading = true;
    },
    [login.fulfilled.type]: (state, action: PayloadAction<any>) => {
      localStorage.setItem('token', action.payload.token);
      state.isAuth = true;
      state.user = action.payload.user;
      state.loading = false;
      state.error = '';
    },
    [login.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    [me.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
      state.isAuth = true;
      state.user = action.payload;
    },
    [me.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

// export const { setUser } = authSlice.actions;

export default authSlice.reducer;
