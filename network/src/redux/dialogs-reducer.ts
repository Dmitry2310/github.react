import {dialogType, messageType} from './types/types';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Bob' },
        { id: 2, name: 'Mary' },
        { id: 3, name: 'Viktor' },
        { id: 4, name: 'Sveta' }] as Array<dialogType>,
    messages: [
        { id: 1, message: 'hi' },
        { id: 2, message: 'how ar u?' },
        { id: 3, message: 'gav gav' }] as Array<messageType>
};

export type initialStateType = typeof initialState;

export const dialogsReducer = (state = initialState, action: any): initialStateType => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageText;
            return {
                ...state,
                messages: [{ id: 4, message: body }, ...state.messages]
            }
        default:
            return state;
    }
}

type sendMessageCreatorActionType = {
    type: typeof SEND_MESSAGE,
    newMessageText: string
}

export const sendMessageCreator = (newMessageText: string): sendMessageCreatorActionType => {
    return {
        type: SEND_MESSAGE,
        newMessageText
    }
}


export default dialogsReducer;