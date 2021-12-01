import { profileReducer, addPostActionCreator } from "./profile-reducer";


let state = {
    posts: [
        { id: 1, post: 'hi', likesCount: 12 },
        { id: 2, post: 'hi, how are u?', likesCount: 9 },
        { id: 3, post: 'It\'s my first progect!', likesCount: 16 }]
};

it ('new post schould be added', () => {
    let action = addPostActionCreator('phrase');
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(3);
});