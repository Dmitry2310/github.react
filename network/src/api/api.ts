import { UserType } from './../redux/types/types';
import axios from 'axios';

export const instance = axios.create({
    withCredentials: true,
    responseType: 'json',
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '2c764cb3-4b05-4ea7-9034-a0dec41567b0'
    }
});

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
    CaptchaIsRequired = 10
}
export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10
}

export type GetItemsType = {
    items: Array<UserType>,
    totalCount: number,
    error: string | null
}

export type ResponseTypes<D = {}, RC = ResultCodesEnum> = {
    data: D,
    messages: Array<string>,
    resultCode: RC
}

