import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api/',
  withCredentials: true,
  headers: {
    authorization: localStorage.getItem('token'),
  },
});
export const userAPI = {
  getPosts: () =>
    instance.get('posts').then((res) => {
      return res;
    }),
};
