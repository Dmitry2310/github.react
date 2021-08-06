import style from './Post.module.css';

const Post = () => {
  return (
    <div className={style.item}>
      <img src='https://images3.alphacoders.com/690/690494.jpg'></img>
      post1
      <div><span>Like</span></div>
    </div>
  );
}

export default Post;