import style from './Post.module.css';

const Post = (props) => {
  return (
    <div className={style.item}>
      <img src='https://images3.alphacoders.com/690/690494.jpg' alt={''}></img>
      <div className={style.news}>{props.message}</div>
      <div className={style.likes}><span>Likes</span> {props.likesCount}</div> 
    </div>
  );
}

export default Post;