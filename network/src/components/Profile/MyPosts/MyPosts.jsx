import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElements = props.posts.map((post) => <Post message={post.post} likesCount={post.likesCount} />);

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.postNews();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div>
      <div className={style.writeMessage}>
        <div className={style.area} ><textarea placeholder='Whats up?' ref={newPostElement}
          onChange={onPostChange} value={props.newPostText}></textarea></div>
        <div className={style.button} onClick={onAddPost}><button>Add Post</button></div>
      </div>
      <div className={style.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;