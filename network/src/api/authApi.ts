import { ResultCodesEnum, ResultCodeForCaptcha } from './api';
import { instance, ResponseTypes } from './api';

type MeResponseDataType = {
    id: number,
    email: string,
    login: string
}
type LoginResponseDataType = {
    userId: number
}

type GetCaptchaResponseType = {
    url: string
}

const authAPI = {
    getMe() {
        return instance.get<ResponseTypes<MeResponseDataType>>(`/auth/me`).then(response => response.data)
    },
    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        const request = { email, password, rememberMe, captcha };
        return instance.post(`/auth/login`, request).then(res => res.data) as Promise<ResponseTypes<LoginResponseDataType, ResultCodesEnum | ResultCodeForCaptcha>>
    },
    logout() {
        return instance.delete<ResponseTypes>(`/auth/login`).then(response => response.data);
    },
    getCaptcha() {
        return instance.get<GetCaptchaResponseType>('security/get-captcha-url').then(response => response.data)
    }
}

export default authAPI;
