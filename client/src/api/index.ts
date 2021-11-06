import axios, {AxiosResponse} from 'axios';
import { IPost } from '../types';



const instance = axios.create({
  baseURL: 'http://localhost:5000/api/',
  withCredentials: true,
  headers: {
    authorization: localStorage.getItem('token') as string,
  },
});

export const userAPI = {
  getPosts: (): Promise<AxiosResponse<IPost[]>> =>
    instance.get('posts').then((res) => res),
  getPostById: (postId: string): Promise<AxiosResponse<IPost>> => 
    instance.get(`posts/${postId}`).then(res => res)
};
