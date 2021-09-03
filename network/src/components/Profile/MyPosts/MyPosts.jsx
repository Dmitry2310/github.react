import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let posts = [
    { id: 1, post: 'hi', likesCount: 12 },
    { id: 2, post: 'hi, how are u?', likesCount: 9 },
    { id: 3, post: 'It\'s my first progect!', likesCount: 16 }];

    let postsElements = posts.map((post) => <Post message={post.name} likesCount={post.likesCount} />);


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