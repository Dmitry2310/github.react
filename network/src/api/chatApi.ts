
type SubscribersType = (messages: ChatMessageTupe[]) => void
export type ChatMessageTupe = {
    message: string,
    photo: string,
    userId: number,
    userName: string
}

let subscribers = [] as Array<SubscribersType>

let ws: WebSocket | null = null;

const closeHandler = () => {
    setTimeout(createChannel, 3000);
}

const messageHandler = (e: MessageEvent) => {
    const newMessages = JSON.parse(e.data);
    subscribers.forEach(sub => sub(newMessages))
}
function createChannel() {
    ws?.removeEventListener('close', closeHandler);
    ws?.close();
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
    ws?.addEventListener('close', closeHandler)
    ws.addEventListener('message', messageHandler)
}

export const chatApi = {
    start() {
        createChannel();
    },
    stop() {
        ws?.removeEventListener('close', closeHandler);
        ws?.removeEventListener('message', messageHandler)
        subscribers = [];
        ws?.close();
    },
    subscribe(callback: SubscribersType) {
        subscribers.push(callback);
    },

    unSubscribe(callback: SubscribersType) {
        subscribers = subscribers.filter(sub => sub !== callback)
    },
    sendMessage (message: string) {
        ws?.send(message)
    }
}