import profileReducer from './Profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sideBarReducer from './sideBar-reducer';

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
            newMessageText: ''
        },
        sideBar: {}
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.sideBar = sideBarReducer(this._state.sideBar, action);
        this._callSubscriber(this._state);
    }
}

export default store;
