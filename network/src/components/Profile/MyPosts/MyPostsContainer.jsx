import React from 'react';
import { updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { addPostActionCreator } from '../../../redux/profile-reducer';

const MyPostsContainer = (props) => {
  let posts = props.store.getState().profilePage.posts;
  let newPostText = props.store.getState().profilePage.newPostText;
  let postNews = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  }

  return (
    (< MyPosts updateNewPostText={onPostChange} postNews={postNews}
      posts={posts}
      newPostText={newPostText} />)
  );
}

export default MyPostsContainer;
