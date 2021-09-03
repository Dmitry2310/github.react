import style from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;
  return (
    <div className={style.dialog + ' ' + style.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
}

const Message = (props) => {
  return (
    <div className={style.message}>{props.message}</div>
  );
}

const Dialogs = (props) => {

  let dialogs = [
    { id: 1, name: 'Bob' },
    { id: 2, name: 'Mary' },
    { id: 3, name: 'Viktor' },
    { id: 4, name: 'Sveta' }];

  let messages = [
    { id: 1, message: 'hi' },
    { id: 2, message: 'how ar u?' },
    { id: 3, message: 'gav gav' }];

  let dialogsElements = dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />);
  let messagesElements = messages.map((message) => < Message message={message.message} />);

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