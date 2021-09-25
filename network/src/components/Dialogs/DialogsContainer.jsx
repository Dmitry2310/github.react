import Dialogs from './Dialogs';
import DialogItem from './DialogsItem/DialogItem';
import Message from './Message/MessageItem';
import { updateMessageCreator } from '../../redux/dialogs-reducer';
import { sendMessageCreator } from '../../redux/dialogs-reducer';

const DialogsContainer = (props) => {
  let state = props.store.getState().messagesPage;

  let onSendMessage = () => {
    props.store.dispatch(sendMessageCreator());
  }
  let updateMessageChange = (body) => {
    let action = updateMessageCreator(body);
    props.store.dispatch(action);
  }

  return (
   <Dialogs updateNewMessageBody={updateMessageChange} sendMessage={onSendMessage} 
   messagesPage={state}/>)
}

export default DialogsContainer;