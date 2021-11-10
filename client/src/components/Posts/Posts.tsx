import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../features/slices/posts';
import { AppDispatch, RootState } from '../../features/store';
import Post from '../Post/Post';
import './Posts.css';

const Posts: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector(({ posts }: RootState) => posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <>
      {loading && <h1>Loading posts...</h1>}
      {error && <h1>{error}</h1>}
      <ul className='posts'>
        {data.map((post) => {
          return <Post key={post._id} {...post} />;
        })}
      </ul>
    </>
  );
};

export default Posts;
