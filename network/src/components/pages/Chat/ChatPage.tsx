import { useEffect, useState } from "react";

const wsChannel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

export type ChatMessageTupe = {
    message: string,
    photo: string,
    userId: number,
    userName: string
}

const ChatPage: React.FC = () => {

    return (
        <div>
            < Chat />
        </div>
    )
}

const Chat: React.FC = () => {

    return (
        <div>
            < ChatMessages />
            < ChatMessagesForm />
        </div>
    )
}
const ChatMessages: React.FC = () => {

    const [messages, setMessages] = useState<ChatMessageTupe[]>([])

    useEffect(() => {
        wsChannel.addEventListener('message', (e: MessageEvent) => {
            let newMessages = JSON.parse(e.data);
            setMessages((prevMessages) => [...prevMessages, ...newMessages])
        })
    }, [])

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

const ChatMessagesForm: React.FC = () => {

    const [message, setMessage] = useState('');


    const sendMessage = () => {
        if (!message) {
            return;
        }
        wsChannel.send(message);
        setMessage(' ');
    }

    return (
        <div>
            <div>
                <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea>
            </div>
            <div>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default ChatPage;