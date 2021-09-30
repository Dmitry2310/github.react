import React from 'react';
import { updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { addPostActionCreator } from '../../../redux/profile-reducer';
import StoreContext from '../../Dialogs/StoreContext';

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let posts = store.getState().profilePage.posts;
          let newPostText = store.getState().profilePage.newPostText;
          let postNews = () => {
            store.dispatch(addPostActionCreator());
          };

          let onPostChange = (text) => {
            let action = updateNewPostTextActionCreator(text);
            store.dispatch(action);
          }
          return (
            < MyPosts updateNewPostText={onPostChange} postNews={postNews}
              posts={posts}
              newPostText={newPostText} />
          )
        }
      }
    </StoreContext.Consumer>
  );
}

export default MyPostsContainer;
