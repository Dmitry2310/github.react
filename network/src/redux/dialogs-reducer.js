const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Bob' },
        { id: 2, name: 'Mary' },
        { id: 3, name: 'Viktor' },
        { id: 4, name: 'Sveta' }],
    messages: [
        { id: 1, message: 'hi' },
        { id: 2, message: 'how ar u?' },
        { id: 3, message: 'gav gav' }],
    newMessageText: ''
};

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageText;
            state.messages.push({ id: 4, message: body });
            state.newMessageText = '';
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}
export const updateMessageCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        body: body
    }
}

export default dialogsReducer;