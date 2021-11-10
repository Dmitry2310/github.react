
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
        { id: 3, message: 'gav gav' }]
};

export const dialogsReducer = (state = initialState, action) => {

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

export const sendMessageCreator = (newMessageText) => {
    return {
        type: SEND_MESSAGE,
        newMessageText
    }
}


export default dialogsReducer;