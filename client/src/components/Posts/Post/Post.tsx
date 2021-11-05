import './Post.css';
import { IPost } from '../Posts';

const Post: React.FC<IPost> = (props) => {
  console.log(props);
  return (
    <div className='post'>
      <img className='post__img' src={props.img} alt='Post' />
      <ul className='post__tags'>
        {props.category.map((item) => (
          <li className='post__tag' key={item._id}>
            {item.name}
          </li>
        ))}
      </ul>
      <h3 className='post__title'>{props.title}</h3>
      <p className='post__date'>{props.createdAt}</p>
      <div className='post__text'>{props.description}</div>
    </div>
  );
};

export default Post;
