import React, { useState, useEffect } from 'react';
import { IComment } from '../../types';
import cl from './Comments.module.css';
import Comment from '../Comment/Comment';
import sendLogo from '../../assets/send.png';
import API from '../../api';

interface ICommentsProps {
  postId: string;
  userId: string;
}

const Comments: React.FC<ICommentsProps> = ({ postId, userId }) => {
  const [value, setValue] = useState('');
  const [items, setItems] = useState<IComment[]>([]);
  console.log(items);

  useEffect(() => {
    API.getComments(postId).then(({ data }) => setItems(data));
  }, [postId]);

  const sendComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    API.sendMessage(value, userId, postId)
      .then(() => {
        API.getComments(postId).then(({ data }) => setItems(data));
      })
      .catch((e) => console.log(e));
    setValue('');
  };

  return (
    <ul className={cl.comments}>
      <form className={cl.sendForm} onSubmit={(e) => sendComment(e)}>
        <input
          className={cl.write}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type='text'
          placeholder='Комментарий...'
        />
        <button className={cl.sendBtn}>
          <img src={sendLogo} alt='Send' />
        </button>
      </form>
      <span className={cl.commentCount}>{items.length} comments</span>
      {items.map((item) => (
        <Comment key={item._id} {...item} />
      ))}
    </ul>
  );
};

export default Comments;
