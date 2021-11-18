import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../api';
import { IComment, IPost } from '../../types';

export const fetchOnePost = createAsyncThunk(
  'post/fetchOnePost',
  async (id: string, thunkAPI) => {
    try {
      const response = await API.getPostById(id);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Не удалось загрузить пост!');
    }
  }
);

interface IPostState {
  post: IPost | null;
  loading: boolean;
  error: string | Error;
  comments: IComment[];
}

const initialState: IPostState = {
  post: null,
  loading: false,
  error: '',
  comments: [],
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchOnePost.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchOnePost.fulfilled.type]: (state, action: PayloadAction<IPost>) => {
      state.post = action.payload;
      state.loading = false;
      state.error = '';
    },
    [fetchOnePost.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

// export const {} = postSlice.actions;

export default postSlice.reducer;
