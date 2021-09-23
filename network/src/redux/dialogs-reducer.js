const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

export const dialogsReducer = (state, action) => {
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