import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../../api';
import { IPost } from '../../../types';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (_, thunkAPI) => {
    try {
      const response = await API.getPosts();

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Не удалось загрузить данные с сервера!');
    }
  }
);

interface IPostsState {
  data: IPost[];
  loading: boolean;
  error: string | Error;
}

const initialState: IPostsState = {
  data: [],
  loading: false,
  error: '',
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPosts.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchPosts.fulfilled.type]: (state, action: PayloadAction<IPost[]>) => {
      state.data = action.payload;
      state.loading = false;
      state.error = '';
    },
    [fetchPosts.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

// export const {} = postsSlice.actions;

export default postsSlice.reducer;
