import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api/',
  withCredentials: true,
  headers: {
    authorization: localStorage.getItem('token') as string,
  },
});

const API = {
  getPosts: (): Promise<AxiosResponse> =>
    instance.get('posts').then((res) => res),
  getPostById: (postId: string): Promise<AxiosResponse> =>
    instance.get(`posts/${postId}`).then((res) => res),
  getComments: (id: string): Promise<AxiosResponse> =>
    instance.get(`/comments/${id}`).then((res) => res),
  sendMessage: (
    text: string,
    user: string,
    post: string
  ): Promise<AxiosResponse> =>
    instance.post('comments', { text, user, post }).then((res) => res),
  login: (email: string, password: string): Promise<AxiosResponse> =>
    instance.post('auth/login', { email, password }).then((res) => res),
  me: () => instance.get('/auth/me').then((res) => res),
};

export default API;
