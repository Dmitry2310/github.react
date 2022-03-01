import style from './Post.module.css';
import React from 'react';

type PropsType = {
  message: String,
  likesCount: number| null
}

const Post: React.FC<PropsType> = (props) => {
  return (
    <div className={style.item}>
      <img src='https://images3.alphacoders.com/690/690494.jpg' alt={''}></img>
      <div className={style.news}>{props.message}</div>
      <div className={style.likes}>Likes {props.likesCount}</div> 
    </div>
  );
}

export default Post;