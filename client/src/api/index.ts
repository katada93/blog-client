import axios, {AxiosResponse} from 'axios';
import { IComment, IPost } from '../types';



const instance = axios.create({
  baseURL: 'http://localhost:5000/api/',
  withCredentials: true,
  headers: {
    authorization: localStorage.getItem('token') as string,
  },
});

const API = {
  getPosts: (): Promise<AxiosResponse<IPost[]>> =>
    instance.get('posts').then((res) => res),
  getPostById: (postId: string): Promise<AxiosResponse<IPost>> => 
    instance.get(`posts/${postId}`).then(res => res),
  getComments: (id: string): Promise<AxiosResponse<IComment[]>> =>
    instance.get(`/comments/${id}`).then(res => res)
};

export default API