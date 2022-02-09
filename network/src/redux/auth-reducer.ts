import { authAPI } from "../api/api";
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'auth/SET_USER_DATA';
const SET_CAPTCHA = 'auth/SET_CAPTCHA';

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
};

export type initialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): initialStateType => {

    switch (action.type) {
        case SET_USER_DATA:
        case SET_CAPTCHA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

type setAuthUserDataActionPayloadType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}

type setAuthUserDataActionType = {
    type: typeof SET_USER_DATA,
    payload: setAuthUserDataActionPayloadType
}

export const setAuthUserData = (userId: number | null, email: string| null, login: string| null, isAuth: boolean): setAuthUserDataActionType => ({
    type: SET_USER_DATA,
    payload: { userId, email, login, isAuth }
})

type setCaptchaUrlActionType = {
    type: typeof SET_CAPTCHA,
    payload: { captchaUrl: string }
}
export const setCaptchaUrl = (captchaUrl: string): setCaptchaUrlActionType => ({
    type: SET_CAPTCHA,
    payload: { captchaUrl }
})


export const getAuthUserData = () => async (dispatch: any) => {
    let response = await authAPI.getMe();
    if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: any) => async (dispatch: any) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
        dispatch(stopSubmit('loginForm', { _error: message }));
    }
}

export const getCaptchaUrl = () => async (dispatch: any) => {
    const response = await authAPI.getCaptcha();
    const captchaUrl = response.data.url;
    dispatch(setCaptchaUrl(captchaUrl));
}

export const logout = () => async (dispatch: any) => {
    let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}


export default authReducer;