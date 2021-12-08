import { Field, reduxForm } from "redux-form";
import { LoginInput } from "../common/FormsControls/FormsControls";
import { required } from '../../utilits/validators/validators';
import { connect } from "react-redux";
import { login, logout } from "../../redux/auth-reducer";
import { Redirect } from "react-router";
import style from './../common/FormsControls/FormsControl.module.css';


const LoginForm = (props) => {
    return (
        <form action="#" onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'} component={LoginInput}
                    validate={[required]} />
            </div>
            <div>
                <Field type={'password'} placeholder={'Password'} name={'password'} component={LoginInput}
                    validate={[required]} />
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={LoginInput} /> remember me
            </div>
            { props.error && <div className={style.formSummaryError}>
                {props.error}
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
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmitFunc} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login, logout })(LoginPage);