import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { LoginInput, createField } from "../common/FormsControls/FormsControls";
import { required } from '../../utilits/validators/validators';
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router";
import style from './Login.module.css';
import { AppStateType } from "../../redux/redux-store";

type LoginOwnPropsType = {
    captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginOwnPropsType> & LoginOwnPropsType> = ({ error, captchaUrl, handleSubmit }) => {
    return (
        <form action="#" onSubmit={handleSubmit}>
            <div>
                {createField<LoginFormValuesTypeKeys>('Email', 'email', [required], LoginInput)}
            </div>
            <div>
                <Field type={'password'} placeholder={'Password'} name={'password'} component={LoginInput}
                    validate={[required]} />
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={LoginInput} /> remember me
            </div>
            {captchaUrl &&
                <div>
                    <img alt={'captchaUrl'} src={captchaUrl} />
                </div>}
            {captchaUrl &&
                <div>
                    {createField<LoginFormValuesTypeKeys>('Symbols from image', 'captcha', [required], LoginInput)}
                </div>}
            {error &&
                <div className={style.formSummaryError}>
                    {error}
                </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginOwnPropsType>({ form: 'loginForm' })(LoginForm)

export type LoginFormValuesType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string
};

type LoginFormValuesTypeKeys = Extract<keyof LoginFormValuesType, string>

export const LoginPage: React.FC = () => {

    const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl)
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)

    const dispatch = useDispatch()

    const onSubmitFunc = (formData: LoginFormValuesType) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
    }

    if (isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmitFunc} captchaUrl={captchaUrl} />
        </div>
    )
}