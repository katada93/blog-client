import moment from 'moment';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Comments from '../../components/Comments/Comments';
import { fetchOnePost } from '../../features/slices/post';
import { AppDispatch, RootState } from '../../features/store';
import './Postpage.css';

interface IPostPageParams {
  id: string;
}

const Postpage: React.FC = () => {
  const { id } = useParams<IPostPageParams>();
  const dispatch = useDispatch<AppDispatch>();
  const { post, loading, error } = useSelector(({ post }: RootState) => post);

  useEffect(() => {
    dispatch(fetchOnePost(id));
  }, [dispatch, id]);

  const view = useMemo(() => {
    if (loading) {
      return <h1>loading post...</h1>;
    }
    if (error) {
      return <h1>{error}</h1>;
    }

    return (
      <>
        {post && (
          <div className='post_page'>
            <img className='post_page__img' src={post.img} alt='' />
            <h1 className='post_page__title'>{post.title}</h1>
            <p className='post_page__info'>
              <a href='/'>{post.user.name}</a> |
              <span>
                {moment(post.createdAt).format('MMMM Do YYYY, h:mm a')}
              </span>
            </p>
            <ul className='post__tags'>
              {post.category.map((item) => (
                <li className='post__tag' key={item._id}>
                  {item.name}
                </li>
              ))}
            </ul>
            <p className='post_page__description'>{post.description}</p>
            <div className='post_author'>
              <img
                className='post_author__img'
                src={post.user.img}
                alt='Post author'
              />
              <div className='post_author__info'>
                <h3 className='post_author__name'>{post.user.name}</h3>
                <a className='post_author__email' href='/'>
                  {`@${post.user.email}`}
                </a>
              </div>
            </div>
            <Comments postId={id} userId={post.user._id} />
          </div>
        )}
      </>
    );
  }, [error, id, loading, post]);

  return <>{view}</>;
};

export default Postpage;
