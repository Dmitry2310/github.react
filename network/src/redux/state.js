const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, post: 'hi', likesCount: 12 },
                { id: 2, post: 'hi, how are u?', likesCount: 9 },
                { id: 3, post: 'It\'s my first progect!', likesCount: 16 }],
            newPostText: ''
        },
        messagesPage: {
            dialogs: [
                { id: 1, name: 'Bob' },
                { id: 2, name: 'Mary' },
                { id: 3, name: 'Viktor' },
                { id: 4, name: 'Sveta' }],
            messages: [
                { id: 1, message: 'hi' },
                { id: 2, message: 'how ar u?' },
                { id: 3, message: 'gav gav' }],
            newMessageText : ''    
        }
    },
    _callSubscriber() {
        console.log('state changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 4,
                post: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.messagesPage.newMessageText = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.messagesPage.newMessageText;
            this._state.messagesPage.messages.push({ id: 4, message: body });
            this._callSubscriber(this._state);
            this._state.messagesPage.newMessageText = '';
        }
    }
}
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
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

export default store;
