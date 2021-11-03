import Post from './Post/Post';
import './Posts.css';

const arr: number[] = [1, 2, 3, 4, 5, 6];

const Posts = () => {
  return (
    <ul className='posts'>
      {arr.map((item) => {
        return <Post key={item} />;
      })}
    </ul>
  );
};

export default Posts;
