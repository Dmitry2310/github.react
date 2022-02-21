import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { required, maxLengthCreator } from '../../../utilits/validators/validators';
import { TextArea } from '../../common/FormsControls/FormsControls';
import { PostType } from '../../../redux/types/types';

const maxLength10 = maxLengthCreator(10);

export type MapStatePropsTypes = {
  posts: Array<PostType>
}
export type MapDispatchPropsTypes = {
  postNews: (newPostText: string) => void
}
type PropsType = MapStatePropsTypes & MapDispatchPropsTypes

const MyPosts: React.FC<PropsType> = (props) => {

  let postsElements = props.posts.map((post) => <Post key={post.id} message={post.post} likesCount={post.likesCount} />);

  let onAddPost = (formData: AddNewPostFormValuesType) => {
    props.postNews(formData.newPostText);
  };

  return (

    <div>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={style.posts}>
        {postsElements}
      </div>
    </div>
  );
};

type AddNewPostFormValuesType = {
  newPostText: string
};

const AddNewPostForm: React.FC<InjectedFormProps<AddNewPostFormValuesType, {}> & {}> = (props) => {
  return (
    <form className={style.writeMessage} onSubmit={props.handleSubmit}>
      <Field className={style.area} validate={[required, maxLength10]} placeholder='Whats up?'
        name='newPostText' component={TextArea}></Field>
      <div className={style.button}>
        <button>Add Post</button>
      </div>
    </form>
  )
}

const AddNewPostFormRedux = reduxForm<AddNewPostFormValuesType, {}>({ form: 'ProfileAddNewPostForm' })(AddNewPostForm);

export default MyPosts;