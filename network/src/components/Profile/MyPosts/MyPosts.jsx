import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElements = props.posts.map((post) => <Post message={post.name} likesCount={post.likesCount} />);

  return (
    <div>
      <div className={style.writeMessage}>
        <div className={style.area}><textarea placeholder='Whats up?'></textarea></div>
        <div className={style.button}><button>Add Post</button></div>
      </div>
      <div className={style.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;