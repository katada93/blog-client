import { useEffect, useState } from 'react';
import { userAPI } from '../../api';
import { IPost } from '../../types';
import Post from './Post/Post';
import './Posts.css';

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
