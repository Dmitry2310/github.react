import style from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogItem';
import Message from './Message/MessageItem';
import { Field, reduxForm } from "redux-form";
import { TextArea } from '../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../utilits/validators/validators';

const Dialogs = (props) => {
  let state = props.messagesPage;
  let dialogsElements = state.dialogs.map((dialog) => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);
  let messagesElements = state.messages.map((message) => < Message message={message.message} key={message.id} />);

  let addNewMessage = (formData) => {
    props.sendMessage(formData.newMessageText);
  }

  return (
    <div className={style.dialogs}>
      <div className={style.dialogItems}>
        {dialogsElements}
      </div>

      <div className={style.messages}>
        < AddMessageFormRedux  onSubmit={addNewMessage}/>
        {messagesElements}
      </div>
    </div>);
}

const maxLength20 = maxLengthCreator(20);

const AddMessageForm = (props) => {
  return (
    <form className={style.writeMessage} onSubmit={props.handleSubmit}>
        <Field className={style.area} component={TextArea} 
        name={'newMessageText'} placeholder='Your message...' validate={[required, maxLength20]}/>
      <div className={style.button}>
        <button>Add Post</button>
      </div>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);


export default Dialogs;