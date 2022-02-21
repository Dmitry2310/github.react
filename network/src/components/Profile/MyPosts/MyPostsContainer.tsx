import MyPosts, { MapDispatchPropsTypes, MapStatePropsTypes } from './MyPosts';
import { actions } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';
import { AppStateType } from '../../../redux/redux-store';


let mapStateToProps = (state: AppStateType) => {
  return {
    posts: state.profilePage.posts
  } 
} 

let MyPostsContainer = connect<MapStatePropsTypes, MapDispatchPropsTypes, {}, AppStateType>(mapStateToProps, { postNews: actions.addPostActionCreator })(MyPosts);

export default MyPostsContainer;
