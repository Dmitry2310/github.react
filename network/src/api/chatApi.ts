import { StatusType } from "../redux/chat-reducer";

type MessagesReceivedSubscribersType = (messages: ChatMessageTupe[]) => void;
type StatusChangedubscribersType = (status: StatusType) => void;
type EventsNamesType = 'messages-received' | 'status-changed';

export type ChatMessageTupe = {
    message: string,
    photo: string,
    userId: number,
    userName: string
}

const subscribers = {
    'messages-received': [] as Array<MessagesReceivedSubscribersType>,
    'status-changed': [] as Array<StatusChangedubscribersType>
}

let ws: WebSocket | null = null;

const closeHandler = () => {
    notificationSubscribersStatus('pending');
    setTimeout(createChannel, 3000);
}

const messageHandler = (e: MessageEvent) => {
    const newMessages = JSON.parse(e.data);
    subscribers['messages-received'].forEach(sub => sub(newMessages));
}

const openHandler = () => {
    notificationSubscribersStatus('ready');

    console.log('gjg')
}
const errorHandler = () => {
    notificationSubscribersStatus('error');
    console.log('RESTART PAGE');
}

const cleanUp = () => {
    ws?.removeEventListener('close', closeHandler);
    ws?.removeEventListener('message', messageHandler);
    ws?.removeEventListener('open', openHandler);
    ws?.removeEventListener('error', errorHandler);
}

const notificationSubscribersStatus = (status: StatusType) =>{
    subscribers['status-changed'].forEach(sub => sub(status));
}

function createChannel() {
    cleanUp();
    ws?.close();
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
    notificationSubscribersStatus('pending');
    ws.addEventListener('close', closeHandler);
    ws.addEventListener('message', messageHandler);
    ws.addEventListener('open', openHandler);
    ws.addEventListener('error', errorHandler);
}

export const chatApi = {
    start() {
        createChannel();
    },
    stop() {
        cleanUp();
        subscribers['messages-received'] = [];
        subscribers['status-changed'] = [];
        ws?.close();
    },
    subscribe(eventName: EventsNamesType, callback: MessagesReceivedSubscribersType | StatusChangedubscribersType) {
        // @ts-ignore
        subscribers[eventName].push(callback);
        return () => {
            // @ts-ignore
            subscribers[eventName] = subscribers[eventName].filter(s => s !== callback);
        }
    },
    unSubscribe(eventName: EventsNamesType, callback: MessagesReceivedSubscribersType | StatusChangedubscribersType) {
        // @ts-ignore
        subscribers[eventName] = subscribers[eventName].filter(sub => sub !== callback);
    },
    sendMessage(message: string) {
        ws?.send(message)
    }
}