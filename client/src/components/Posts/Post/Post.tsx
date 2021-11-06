import './Post.css';
import moment from 'moment';
import { IPost } from '../../../types';

const Post: React.FC<IPost> = (props) => {
  const { title, category, description, img, createdAt, likes, user } = props;

  return (
    <div className='post'>
      <img className='post__img' src={img} alt='Post' />
      <ul className='post__tags'>
        {category.map((item) => (
          <li className='post__tag' key={item._id}>
            {item.name}
          </li>
        ))}
      </ul>
      <h3 className='post__title'>{title}</h3>
      <p className='post__date'>
        <a href='/'>{user.name}</a> |
        <span> {moment(createdAt).format('MMMM Do YYYY, h:mm')}</span>
      </p>
      <div className='post__text'>{description}</div>
    </div>
  );
};

export default Post;
