import { useEffect, useState } from 'react';
import { userAPI } from '../../api/api';
import Post from './Post/Post';
import './Posts.css';

interface IUser {
  _id: string;
  name: string;
  email: string;
  img?: string;
}

interface Category {
  name: string;
  _id: string;
}
export interface IPost {
  _id: string;
  title: string;
  description: string;
  img?: string;
  user: IUser;
  category: Category[];
  likes: string[];
  createdAt: string;
}

const Posts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  useEffect(() => {
    userAPI.getPosts().then(({ data }) => setPosts(data));
  }, []);
  return (
    <ul className='posts'>
      {posts.map((post) => {
        return <Post key={post._id} {...post} />;
      })}
    </ul>
  );
};

export default Posts;
