import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from "redux-form";
import { required, maxLengthCreator } from '../../../utilits/validators/validators';
import { TextArea } from '../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);

const MyPosts = React.memo((props) => {

  let postsElements = props.posts.map((post) => <Post message={post.post} key={post.id} likesCount={post.likesCount} />);

  let onAddPost = (formData) => {
    props.postNews(formData.newPostText);
  };

  return (
    <div>
      <AddNewPostFormRedux  onSubmit={onAddPost}/>
      <div className={style.posts}>
        {postsElements}
      </div>
    </div>
  );
});

const AddNewPostForm = (props) => {
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

const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);

export default MyPosts;