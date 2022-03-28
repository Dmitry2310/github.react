import { Dispatch } from 'redux';
import { stopSubmit } from 'redux-form';
import { BaseThunkType, InferActionsType } from "./redux-store";
import { chatApi, ChatMessageTupe } from './../api/chatApi';

export type StatusType = 'pending' | 'ready' | 'error'

let initialState = {
    messages: [] as ChatMessageTupe[],
    status: 'pending' as StatusType
};

export type initialStateType = typeof initialState;

const chatReducer = (state = initialState, action: ActionsType): initialStateType => {

    switch (action.type) {
        case 'chat/MESSAGES_RECEIVED':
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages]
            }
            case 'chat/STATUS_CHANGED':
                return {
                    ...state,
                    status: action.payload.status
                }
        default:
            return state;
    }
}

type ActionsType = InferActionsType<typeof actions>

export const actions = {
    messagesReceived: (messages: ChatMessageTupe[]) => ({
        type: 'chat/MESSAGES_RECEIVED',
        payload: { messages }
    } as const),
    statusChanged: (status: StatusType) => ({
        type: 'chat/STATUS_CHANGED',
        payload: { status }
    } as const)
}

type ThunkType = BaseThunkType<ActionsType | ReturnType<typeof stopSubmit>>;

let _newMessageHandler: ((messages: ChatMessageTupe[]) => void) | null = null;

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
}
export const sendNewMessage = (message: string): ThunkType => async (dispatch) => {
    chatApi.sendMessage(message)
}


export default chatReducer;