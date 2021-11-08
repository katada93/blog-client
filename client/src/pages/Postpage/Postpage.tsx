import moment from 'moment';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import API from '../../api';
import { IComment, IPost } from '../../types';
import './Postpage.css';

interface IPostPageParams {
  id: string;
}

const Postpage: React.FC = () => {
  const { id } = useParams<IPostPageParams>();
  const [post, setPost] = useState<IPost | null>(null);
  const [comments, setComments] = useState<IComment[]>([]);
  console.log(comments);

  useEffect(() => {
    API.getPostById(id).then(({ data }) => setPost(data));
    API.getComments(id).then(({ data }) => setComments(data));
  }, [id]);
  return (
    <div className='post_page'>
      <img className='post_page__img' src={post?.img} alt='' />
      <h1 className='post_page__title'>{post?.title}</h1>
      <p className='post_page__info'>
        <a href='/'>{post?.user.name}</a> |
        <span> {moment(post?.createdAt).format('MMMM Do YYYY, h:mm a')}</span>
      </p>
      <ul className='post__tags'>
        {post?.category.map((item) => (
          <li className='post__tag' key={item._id}>
            {item.name}
          </li>
        ))}
      </ul>
      <p className='post_page__description'>{post?.description}</p>
      <div className='post_author'>
        <img
          className='post_author__img'
          src={post?.user.img}
          alt='Post author'
        />
        <div className='post_author__info'>
          <h3 className='post_author__name'>{post?.user.name}</h3>
          <a className='post_author__email' href='/'>
            {`@${post?.user.email}`}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Postpage;
