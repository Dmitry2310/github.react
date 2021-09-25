import style from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogItem';
import Message from './Message/MessageItem';

const Dialogs = (props) => {
  let state = props.messagesPage;
  let dialogsElements = state.dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />);
  let messagesElements = state.messages.map((message) => < Message message={message.message} />);
  let newMessageText = state.newMessageText;

  let onSendMessage = () => {
    props.sendMessage();
  }
  let updateMessageChange = (event) => {
    let body = event.target.value;
    props.updateNewMessageBody(body);
  }

  return (
    <div className={style.dialogs}>
      <div className={style.dialogItems}>
        {dialogsElements}
      </div>

      <div className={style.messages}>
        <div className={style.writeMessage}>
          <div className={style.area} ><textarea placeholder='Your message...' value={newMessageText} onChange={updateMessageChange}></textarea></div>
          <div className={style.button} onClick={onSendMessage}><button>Add Post</button></div>
        </div>
        {messagesElements}
      </div>
    </div>);
}

export default Dialogs;