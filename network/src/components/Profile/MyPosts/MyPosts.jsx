import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add Post</button>
      </div>
      <div className={style.posts}>
        <Post message = 'hi, how are u?' likesCount = '0'/>
        <Post message = 'my first progect!' likesCount = '23'/>
      </div>
    </div>
  );
}

export default MyPosts;