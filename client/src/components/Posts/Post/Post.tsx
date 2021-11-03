import './Post.css';

interface IPost {
  key?: number;
  title: string;
  description: string;
  img?: string;
  user: string;
  category: string[];
  likes: string[];
  createdAt: string;
}

const Post = () => {
  return (
    <div className='post'>
      <img
        className='post__img'
        src='https://img1.goodfon.ru/wallpaper/nbig/b/9f/post-call-bid-black-background.jpg'
        alt='Post'
      />
      <ul className='post__tags'>
        <li className='post__tag'>travel</li>
        <li className='post__tag'>sport</li>
      </ul>
      <h3 className='post__title'>
        What Traveling Greece For 2 Weeks Taught Me About Life
      </h3>
      <p className='post__date'>Jun 21, 2021</p>
      <div className='post__text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam mollis
        lectus vitae nulla malesuada amet purus sed. A condimentum tempus a
        egestas sodales diam cras.
      </div>
    </div>
  );
};

export default Post;
