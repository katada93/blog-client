import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './slices/posts/postsSlice';
import postReducer from './slices/post';
import authReducer from './slices/auth/authSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    post: postReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
