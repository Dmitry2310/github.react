import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendNewMessage, startMessagesListening, stopMessagesListening } from "../../../redux/chat-reducer";
import { AppStateType } from "../../../redux/redux-store";
import { ChatMessageTupe } from './../../../api/chatApi';

const ChatPage: React.FC = () => {
    return (
        <div>
            < Chat />
        </div>
    )
}

const Chat: React.FC = () => {

    const dispatch = useDispatch();
    const status = useSelector((state: AppStateType) => state.chat.status);

    useEffect(() => {
        dispatch(startMessagesListening());
        return () => {
            dispatch(stopMessagesListening());
        }
    }, [])

    return (
        <div>
            {status === 'error'
                ? <div>
                    Some error occured. Please restart the page
                </div> :
                <>
                    < ChatMessages />
                    < ChatMessagesForm />
                </>}
        </div>
    )
}
const ChatMessages: React.FC<{}> = () => {

    const messages = useSelector((state: AppStateType) => state.chat.messages);

    return (
        <div style={{ height: 300, overflowY: 'auto' }}>
            {messages.map((mes, index) => <Message key={index} message={mes} />)}
        </div>
    )
}

const Message: React.FC<{ message: ChatMessageTupe }> = ({ message }) => {

    return (
        <div>
            <img src={message.photo} /> <b>{message.userName}</b>
            <div>
                {message.message}
            </div>
            <hr />
        </div>
    )
}

const ChatMessagesForm: React.FC<{}> = ({ }) => {

    const [message, setMessage] = useState('');
    const dispatch = useDispatch();
    const status = useSelector((state: AppStateType) => state.chat.status);

    const sendMessage = () => {
        if (message === '') {
            return;
        }
        dispatch(sendNewMessage(message));
        setMessage('');
    }

    return (
        <div>
            <div>
                <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea>
            </div>
            <div>
                <button disabled={status !== 'ready'} onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default ChatPage;