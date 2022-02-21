import style from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogItem';
import Message from './Message/MessageItem';
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { TextArea } from '../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../utilits/validators/validators';
import { initialStateType } from '../../redux/dialogs-reducer';

type OwnPropsType = {
  messagesPage: initialStateType,
  sendMessageCreator: (messageText: string) => void
}

const Dialogs: React.FC<OwnPropsType> = (props) => {
  let state = props.messagesPage;
  let dialogsElements = state.dialogs.map((dialog) => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);
  let messagesElements = state.messages.map((message) => < Message message={message.message} key={message.id} />);

  let addNewMessage = (formData: NewMessageFormType) => {
    props.sendMessageCreator(formData.newMessageText);
  }

  return (
    <div className={style.dialogs}>
      <div className={style.dialogItems}>
        {dialogsElements}
      </div>

      <div className={style.messages}>
        < AddMessageFormRedux onSubmit={addNewMessage} />
        {messagesElements}
      </div>
    </div>);
}

const maxLength20 = maxLengthCreator(20);


type NewMessageFormType = {
  newMessageText: string
}

type OwnFormPropsType = {}

const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormType, OwnFormPropsType> & OwnFormPropsType> = (props) => {
  return (
    <form className={style.writeMessage} onSubmit={props.handleSubmit}>
      <Field className={style.area} component={TextArea}
        name={'newMessageText'} placeholder='Your message...' validate={[required, maxLength20]} />
      <div className={style.button}>
        <button>Add Post</button>
      </div>
    </form>
  )
}

const AddMessageFormRedux = reduxForm<NewMessageFormType, OwnFormPropsType>({ form: 'dialogAddMessageForm' })(AddMessageForm);


export default Dialogs;