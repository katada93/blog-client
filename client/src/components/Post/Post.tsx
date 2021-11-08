import './Post.css';
import moment from 'moment';
import { IPost } from '../../types';
import { Link } from 'react-router-dom';

const Post: React.FC<IPost> = (props) => {
  const { _id, title, category, description, img, createdAt, likes, user } =
    props;

  return (
    <div className='post'>
      <Link to={`/post/${_id}`}>
        <img className='post__img' src={img} alt='Post' />
      </Link>
      <ul className='post__tags'>
        {category.map((item) => (
          <li className='post__tag' key={item._id}>
            {item.name}
          </li>
        ))}
      </ul>
      <h3 className='post__title'>{title}</h3>
      <p className='post__info'>
        <a href='/'>{user.name}</a> |
        <span> {moment(createdAt).format('MMMM Do YYYY, h:mm')}</span>
      </p>
      <p className='post__text'>{description}</p>
    </div>
  );
};

export default Post;
