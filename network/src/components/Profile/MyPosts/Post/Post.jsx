import style from './Post.module.css';

const Post = (props) => {
  return (
    <div className={style.item}>
      <img src='https://images3.alphacoders.com/690/690494.jpg'></img>
      {props.message}
      <div><span>Like</span> {props.likesCount}</div> 
    </div>
  );
}

export default Post;