import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../features/posts';
import { RootState } from '../../features/store';
import Post from '../Post/Post';
import './Posts.css';

const Posts: React.FC = () => {
  const dispatch = useDispatch();
  const { data } = useSelector(({ posts }: RootState) => posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <ul className='posts'>
      {data.map((post) => {
        return <Post key={post._id} {...post} />;
      })}
    </ul>
  );
};

export default Posts;
