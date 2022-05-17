import { Button } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React from "react";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendNewMessage, startMessagesListening, stopMessagesListening } from "../../../redux/chat-reducer";
import { AppStateType } from "../../../redux/redux-store";
import { ChatMessageType } from './../../../api/chatApi';

const ChatPage: React.FC = () => {
    return (
        <div style={{ height: '100vh' }}>
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
        <div style={{}}>
            {status === 'error' && <div>Some error occured. Please restart the page</div>}
            < ChatMessages />
            < ChatMessagesForm />
        </div>
    )
}
const ChatMessages: React.FC<{}> = () => {
    const messagesAnchorRef = useRef<HTMLDivElement>(null);
    const messages = useSelector((state: AppStateType) => state.chat.messages);
    const [autoScrollIsActive, setAutoScroll] = useState(true);

    const scrollHandler = (e: React.UIEvent<HTMLElement>) => {
        const element = e.currentTarget;
        if (Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 40) {
            !autoScrollIsActive && setAutoScroll(true);
        } else {
            autoScrollIsActive && setAutoScroll(false);
        }
    }

    useEffect(() => {
        if (autoScrollIsActive) {
            messagesAnchorRef.current?.scrollIntoView({ behavior: "smooth" })
        }
    }, [messages])

    return (
        <div style={{ height: 500, overflowY: 'auto', outline: '1px solid silver' }} onScroll={scrollHandler}>
            {messages.map((mes, index) => <Message key={mes.id} message={mes} />)}
            <div ref={messagesAnchorRef}></div>
        </div>
    )
}

const Message: React.FC<{ message: ChatMessageType }> = React.memo(({ message }) => {
    console.log('message')
    return (
        <div>
            <img src={message.photo} /> <b>{message.userName}</b>
            <div>
                {message.message}
            </div>
            <hr />
        </div>
    )
})

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
                <TextArea showCount maxLength={300} onChange={(e) => setMessage(e.currentTarget.value)}
                    value={message} style={{ width: '40%', marginTop: '15px' }} />
            </div>
            <div>
                <Button onClick={sendMessage} style={{ marginTop: '15px' }}>
                    Send
                </Button>
            </div>
        </div>
    )
}

export default ChatPage;