import { InferActionsType } from './redux-store';
import { DialogType, MessageType } from './types/types';

let initialState = {
    dialogs: [
        { id: 1, name: 'Bob' },
        { id: 2, name: 'Mary' },
        { id: 3, name: 'Viktor' },
        { id: 4, name: 'Sveta' }] as Array<DialogType>,
    messages: [
        { id: 1, message: 'hi' },
        { id: 2, message: 'how ar u?' },
        { id: 3, message: 'gav gav' }] as Array<MessageType>
};

export type initialStateType = typeof initialState;

export const dialogsReducer = (state = initialState, action: ActionsType): initialStateType => {

    switch (action.type) {
        case 'DIALOGS/SEND_MESSAGE':
            let body = action.newMessageText;
            return {
                ...state,
                messages: [{ id: 4, message: body }, ...state.messages]
            }
        default:
            return state;
    }
}

type ActionsType = InferActionsType<typeof actions>

export const actions = {
    sendMessageCreator: (newMessageText: string) => ({ type: 'DIALOGS/SEND_MESSAGE', newMessageText } as const)
}

export default dialogsReducer;