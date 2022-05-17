import { Dispatch } from 'redux';
import { stopSubmit } from 'redux-form';
import { BaseThunkType, InferActionsType } from "./redux-store";
import { chatApi, ChatMessageType } from './../api/chatApi';
import { v4 as uuidv4 } from 'uuid';

export type StatusType = 'pending' | 'ready' | 'error'

let initialState = {
    messages: [] as ChatMessageTypeForReducer[],
    status: 'pending' as StatusType
};

type ChatMessageTypeForReducer = ChatMessageType & { id: string }

export type initialStateType = typeof initialState;

const chatReducer = (state = initialState, action: ActionsType): initialStateType => {

    switch (action.type) {
        case 'chat/MESSAGES_RECEIVED':
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages.map(mes => ({ ...mes, id: uuidv4() }))].filter((mes, index, array) => index >= (array.length - 100))
            }
        case 'chat/STATUS_CHANGED':
            return {
                ...state,
                status: action.payload.status
            }
        case 'chat/STRIPPING':
            return {
                ...state,
                messages: []
            }
        default:
            return state;
    }
}

type ActionsType = InferActionsType<typeof actions>

export const actions = {
    messagesReceived: (messages: ChatMessageType[]) => ({
        type: 'chat/MESSAGES_RECEIVED',
        payload: { messages }
    } as const),
    statusChanged: (status: StatusType) => ({
        type: 'chat/STATUS_CHANGED',
        payload: { status }
    } as const),
    stripping: () => ({
        type: 'chat/STRIPPING'
    } as const)
}

type ThunkType = BaseThunkType<ActionsType | ReturnType<typeof stopSubmit>>;

let _newMessageHandler: ((messages: ChatMessageType[]) => void) | null = null;

const newMessageHandlerCreator = (dispatch: Dispatch) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (messages) => {
            dispatch(actions.messagesReceived(messages))
        }
    }
    return _newMessageHandler
}

let _statusChangedHandler: ((status: StatusType) => void) | null = null;

const newStatusChangedCreator = (dispatch: Dispatch) => {
    if (_statusChangedHandler === null) {
        _statusChangedHandler = (status) => {
            dispatch(actions.statusChanged(status))
        }
    }
    return _statusChangedHandler
}
export const startMessagesListening = (): ThunkType => async (dispatch) => {
    chatApi.start();
    chatApi.subscribe('messages-received', newMessageHandlerCreator(dispatch));
    chatApi.subscribe('status-changed', newStatusChangedCreator(dispatch));
}
export const stopMessagesListening = (): ThunkType => async (dispatch) => {
    chatApi.stop();
    chatApi.unSubscribe('messages-received', newMessageHandlerCreator(dispatch));
    chatApi.unSubscribe('status-changed', newStatusChangedCreator(dispatch));
    dispatch(actions.stripping());
}
export const sendNewMessage = (message: string): ThunkType => async (dispatch) => {
    chatApi.sendMessage(message)
}


export default chatReducer;