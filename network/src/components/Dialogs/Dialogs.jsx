import style from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogItem';
import Message from './Message/MessageItem';

const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />);
  let messagesElements = props.state.messages.map((message) => < Message message={message.message} />);

  return (
    <div className={style.dialogs}>
      <div className={style.dialogItems}>
        {dialogsElements}
      </div>
      <div className={style.messages}>
        {messagesElements}
      </div>
    </div>);
}

export default Dialogs;