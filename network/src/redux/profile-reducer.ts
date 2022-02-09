import { profileAPI } from "../api/api";
import { stopSubmit } from 'redux-form';
import {profileType, postType, photosType} from './types/types';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';


let initialState = {
    posts: [
        { id: 1, post: 'hi', likesCount: 12 },
        { id: 2, post: 'hi, how are u?', likesCount: 9 },
        { id: 3, post: 'It\'s my first progect!', likesCount: 16 }] as Array<postType>,
    profile: null as profileType | null,
    status: '',
    newPostText: ''
};

export type initialStateType = typeof initialState;

const profileReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                post: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: ''
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos } as profileType
            };
        }
        default:
            return state;
    }
}

type addPostActionCreatorActionType = {
    type: typeof ADD_POST,
    newPostText: string
}
export const addPostActionCreator = (newPostText: string): addPostActionCreatorActionType => {
    return {
        type: ADD_POST,
        newPostText
    }
}
type setUserProfileActionType = {
    type: typeof SET_USER_PROFILE,
    profile: profileType
}
export const setUserProfile = (profile: profileType): setUserProfileActionType => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}
type setStatusActionType = {
    type: typeof SET_STATUS,
    status: string
}
export const setStatus = (status: string): setStatusActionType => {
    return {
        type: SET_STATUS,
        status: status
    }
}
type setPhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS,
    photos: photosType
}
export const setPhotoSuccess = (photos: photosType): setPhotoSuccessActionType => {
    return {
        type: SAVE_PHOTO_SUCCESS,
        photos
    }
}

export const getUserProfile = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}

export const getStatus = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}
export const updateStatus = (status: string) => async (dispatch: any) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}
export const savePhoto = (file: any) => async (dispatch: any) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(setPhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = (profile: profileType) => async (dispatch: any, getState: any) => {

    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);

    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit('edit-profile', { _error: response.data.messages[0] }));
        return Promise.reject(response.data.messages[0]);
    }
}


export default profileReducer;