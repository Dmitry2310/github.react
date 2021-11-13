import { Field, reduxForm } from "redux-form";
import { LoginInput } from "../common/FormsControls/FormsControls";
import { required, maxLengthCreator } from '../../utilits/validators/validators';


const LoginForm = (props) => {
    return (
        <form action="#" onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'login'} component={LoginInput} 
                validate={[required]}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={LoginInput}
                validate={[required]} />
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={LoginInput} /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const LoginPage = (props) => {

    const onSubmitFunc = (formData) => {
        console.log(formData);
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmitFunc} />
        </div>
    )
}
export default LoginPage;