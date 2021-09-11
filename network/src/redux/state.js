import { rerenderEntireTree } from "../render";

let state = {
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
};

export let addPost = () => {
    let newPost = {
        id: 4,
        post: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export default state;