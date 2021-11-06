import { useEffect } from 'react';
import { useParams } from 'react-router';

interface IPostPageParams {
  id: string | undefined;
}

const Postpage = () => {
  const { id } = useParams<IPostPageParams>();
  useEffect(() => {
    console.log(id);
  }, []);
  return <div>Single post page</div>;
};

export default Postpage;
