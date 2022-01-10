import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../features/slices/posts/postsSlice';
import { AppDispatch, RootState } from '../../features/store';
import Post from '../Post/Post';
import './Posts.css';

const Posts: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector(({ posts }: RootState) => posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const view = useMemo(() => {
    if (loading) {
      return <h1>Loading posts...</h1>;
    }
    if (error) {
      return <h1>{error}</h1>;
    }

    return (
      <ul className='posts'>
        {data.map((post) => {
          return <Post key={post._id} {...post} />;
        })}
      </ul>
    );
  }, [loading, error, data]);

  return <>{view}</>;
};

export default Posts;
