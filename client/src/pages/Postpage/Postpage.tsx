import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { userAPI } from '../../api';
import { IPost } from '../../types';

interface IPostPageParams {
  id: string;
}

const Postpage: React.FC = () => {
  const { id } = useParams<IPostPageParams>();
  const [post, setPost] = useState<IPost | null>(null);

  useEffect(() => {
    userAPI.getPostById(id).then(({ data }) => setPost(data));
  }, [id]);
  return (
    <div className='post_page'>
      <img src={post?.img} alt='' />
      <h3>{post?.title}</h3>
    </div>
  );
};

export default Postpage;
