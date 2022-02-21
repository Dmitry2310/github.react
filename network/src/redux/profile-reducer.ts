import { profileAPI } from "../api/profileApi";
import { FormAction, stopSubmit } from 'redux-form';
import { ProfileType, PostType, PhotosType } from './types/types';
import { BaseThunkType, InferActionsType } from "./redux-store";

let initialState = {
    posts: [
        { id: 1, post: 'hi', likesCount: 12 },
        { id: 2, post: 'hi, how are u?', likesCount: 9 },
        { id: 3, post: 'It\'s my first progect!', likesCount: 16 }] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
    photos: null as PhotosType | null
};

export type initialStateType = typeof initialState;

const profileReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case 'PROFILE/ADD-POST': {
            let newPost = {
                id: 4,
                post: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [newPost, ...state.posts]
            }
        }
        case 'PROFILE/SET_STATUS': {
            return {
                ...state,
                status: action.status
            };
        }
        case 'PROFILE/SET_USER_PROFILE': {
            return {
                ...state,
                profile: action.profile
            };
        }
        case 'PROFILE/SAVE_PHOTO_SUCCESS': {
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos } as ProfileType
            };
        }
        default:
            return state;
    }
}

type ActionsTypes = InferActionsType<typeof actions>

export const actions = {
    addPostActionCreator: (newPostText: string) => ({ type: 'PROFILE/ADD-POST', newPostText } as const),
    setUserProfile: (profile: ProfileType) => ({ type: 'PROFILE/SET_USER_PROFILE', profile } as const),
    setStatus: (status: string) => ({ type: 'PROFILE/SET_STATUS', status: status } as const),
    setPhotoSuccess: (photos: PhotosType) => ({ type: 'PROFILE/SAVE_PHOTO_SUCCESS', photos } as const)
}
type ThunkType = BaseThunkType<ActionsTypes | FormAction>

export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
    let data = await profileAPI.getProfile(userId);
    dispatch(actions.setUserProfile(data));
}

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
    let data = await profileAPI.getStatus(userId);
    dispatch(actions.setStatus(data));
}
export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    let data = await profileAPI.updateStatus(status);
    if (data.resultCode === 0) {
        dispatch(actions.setStatus(status));
    }
}
export const savePhoto = (file: File): ThunkType => async (dispatch) => {
    let data = await profileAPI.savePhoto(file);
    if (data.resultCode === 0) {
        dispatch(actions.setPhotoSuccess(data.data.photos));
    }
}

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {

    const userId = getState().auth.userId;
    const data = await profileAPI.saveProfile(profile);

    if (data.resultCode === 0) {
        if (userId != null) {
            dispatch(getUserProfile(userId));
        } else {
            throw Error('UserId can`t be a null')
        }
    } else {
        dispatch(stopSubmit('edit-profile', { _error: data.messages[0] }));
        return Promise.reject(data.messages[0]);
    }
}


export default profileReducer;