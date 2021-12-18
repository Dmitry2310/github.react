import { Field, reduxForm } from "redux-form";
import { LoginInput, createField } from "../common/FormsControls/FormsControls";
import { required } from '../../utilits/validators/validators';
import { connect } from "react-redux";
import { login, logout } from "../../redux/auth-reducer";
import { Redirect } from "react-router";
import style from './../common/FormsControls/FormsControl.module.css';


const LoginForm = ({ error, captchaUrl, handleSubmit }) => {
    return (
        <form action="#" onSubmit={handleSubmit}>
            <div>
                {createField('Email', 'email', [required], LoginInput)}
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
                   {createField('Symbols from image', 'captcha', [required], LoginInput)}
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

const LoginReduxForm = reduxForm({ form: 'loginForm' })(LoginForm)

const LoginPage = (props) => {
    const onSubmitFunc = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmitFunc} captchaUrl={props.captchaUrl} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, { login, logout })(LoginPage);