import {combineReducers, createStore} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sideBarReducer from './sideBar-reducer';
import usersReducer from './users-reducer';


let reducers = combineReducers({
    profilePage  : profileReducer,
    messagesPage : dialogsReducer,
    sideBar : sideBarReducer,
    usersPage : usersReducer
});

let store = createStore(reducers);

window.store = store;
export default store;