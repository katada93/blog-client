import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import API from '../api';
import { IPost } from '../types';

interface IPostsState {
  data: IPost[],
  loading: boolean
}

const initialState: IPostsState = {
  data: [],
  loading: false,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setPosts: (state, action: PayloadAction<IPost[]>) => {
      state.data = action.payload
      state.loading = false;
    },
  },
});

export const fetchPosts = () => async (dispatch: any) => {
  dispatch(setLoading(true))
  const {data} = await API.getPosts()
  dispatch(setPosts(data))
  console.log(data)
}

export const { setPosts, setLoading } = postsSlice.actions;

export default postsSlice.reducer;
