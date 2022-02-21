// import profileReducer, { actions } from "./profile-reducer";
// import { PhotosType, ProfileType } from '../redux/types/types';


// let state = {
//     posts: [
//         { id: 1, post: 'hi', likesCount: 12 },
//         { id: 2, post: 'hi, how are u?', likesCount: 9 },
//         { id: 3, post: 'It\'s my first progect!', likesCount: 16 }],
//     profile: null as ProfileType | null,
//     status: '',
//     newPostText: '',
//     photos: null as PhotosType | null
// };

// it('new post schould be added', () => {
//     let action = actions.addPostActionCreator('phrase');
//     let newState = profileReducer(state, action);
//     expect(newState.posts.length).toBe(3);
// });