import Dialogs from './Dialogs';
import { updateMessageCreator } from '../../redux/dialogs-reducer';
import { sendMessageCreator } from '../../redux/dialogs-reducer';
import StoreContext from './StoreContext';

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState().messagesPage;

          let onSendMessage = () => {
            store.dispatch(sendMessageCreator());
          }
          let updateMessageChange = (body) => {
            let action = updateMessageCreator(body);
            store.dispatch(action);
          }
          return (
            <Dialogs updateNewMessageBody={updateMessageChange} sendMessage={onSendMessage}
              messagesPage={state} />)
        }
      }
    </StoreContext.Consumer>
  )
}

export default DialogsContainer;