const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
            messages: [
                { id: 1, message: 'hi' },
                { id: 2, message: 'how ar u?' },
                { id: 3, message: 'gav gav' }],
            dialogs: [
                { id: 1, name: 'Bob' },
                { id: 2, name: 'Mary' },
                { id: 3, name: 'Viktor' },
                { id: 4, name: 'Sveta' }]
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

export default store;
