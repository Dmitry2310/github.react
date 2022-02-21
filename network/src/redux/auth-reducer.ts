import authAPI from './../api/authApi';
import { ResultCodeForCaptcha, ResultCodesEnum } from "../api/api";
import { stopSubmit } from 'redux-form';
import { BaseThunkType, InferActionsType } from "./redux-store";

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
};

export type initialStateType = typeof initialState;

const authReducer = (state = initialState, action: ActionsType): initialStateType => {

    switch (action.type) {
        case 'auth/SET_USER_DATA':
        case 'auth/SET_CAPTCHA':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

type ActionsType = InferActionsType<typeof actions>

export const actions = {
    setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
        type: 'auth/SET_USER_DATA',
        payload: { userId, email, login, isAuth }
    } as const),
    setCaptchaUrl: (captchaUrl: string) => ({
        type: 'auth/SET_CAPTCHA',
        payload: { captchaUrl }
    } as const)
}

type ThunkType = BaseThunkType<ActionsType | ReturnType< typeof stopSubmit>>;

export const getAuthUserData = (): ThunkType => async (dispatch) => {
    let MeData = await authAPI.getMe();
    if (MeData.resultCode === ResultCodesEnum.Success) {
        let { id, email, login } = MeData.data;
        dispatch(actions.setAuthUserData(id, email, login, true));
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch: any) => {
    let loginData = await authAPI.login(email, password, rememberMe, captcha);
    if (loginData.resultCode === ResultCodesEnum.Success) {
        dispatch(getAuthUserData());
    } else {
        if (loginData.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
            dispatch(getCaptchaUrl());
        }
        let message = loginData.messages.length > 0 ? loginData.messages[0] : 'Some error';
        dispatch(stopSubmit('loginForm', { _error: message }));
    }
}

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const data = await authAPI.getCaptcha();
    const captchaUrl = data.url;
    dispatch(actions.setCaptchaUrl(captchaUrl));
}

export const logout = () => async (dispatch: any) => {
    let data = await authAPI.logout();
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(actions.setAuthUserData(null, null, null, false));
    }
}

export default authReducer;