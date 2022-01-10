import moment from 'moment';
import React from 'react';
import { IComment } from '../../types';
import cl from './Comment.module.css';

const Comment: React.FC<IComment> = ({ text, user, createdAt }) => {
  return (
    <li className={cl.comment}>
      <img className={cl.img} src={user.img} alt='Comment author' />
      <div className={cl.info}>
        <div className={cl.top}>
          <h4 className={cl.author}>{user.name}</h4>
          <p className={cl.date}>
            {moment(createdAt).subtract(0, 'days').calendar()}
          </p>
        </div>
        <p className={cl.text}>{text}</p>
      </div>
    </li>
  );
};

export default Comment;
