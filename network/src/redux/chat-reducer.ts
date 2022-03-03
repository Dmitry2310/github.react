import { Dispatch } from 'redux';
import authAPI from './../api/authApi';
import { ResultCodeForCaptcha, ResultCodesEnum } from "../api/api";
import { stopSubmit } from 'redux-form';
import { BaseThunkType, InferActionsType } from "./redux-store";
import { chatApi, ChatMessageTupe } from './../api/chatApi';

let initialState = {
    messages: [] as ChatMessageTupe[]
};

export type initialStateType = typeof initialState;

const chatReducer = (state = initialState, action: ActionsType): initialStateType => {

    switch (action.type) {
        case 'chat/MESSAGES_RECEIVED':
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages]
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
    } as const)
}

type ThunkType = BaseThunkType<ActionsType | ReturnType<typeof stopSubmit>>;

let _newMessageHandler: ((messages: ChatMessageTupe[]) => void) | null = null;

const newMessageHandlerCreator = (dispatch: Dispatch) => {
    if (_newMessageHandler == null) {
        _newMessageHandler = (messages) => {
            dispatch(actions.messagesReceived(messages))
        }
    }
    return _newMessageHandler
}
export const startMessagesListening = (): ThunkType => async (dispatch) => {
    chatApi.start()
    chatApi.subscribe(newMessageHandlerCreator(dispatch))
}
export const stopMessagesListening = (): ThunkType => async (dispatch) => {
    chatApi.stop()
    chatApi.unSubscribe(newMessageHandlerCreator(dispatch))
}
export const sendNewMessage = (message: string): ThunkType => async (dispatch) => {
    chatApi.sendMessage(message)
}


export default chatReducer;