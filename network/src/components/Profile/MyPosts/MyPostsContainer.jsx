import MyPosts from './MyPosts';
import { addPostActionCreator } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
    photos: state.profilePage.photos
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    postNews: (newPostText) => {
      dispatch(addPostActionCreator(newPostText));
    }
  }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
