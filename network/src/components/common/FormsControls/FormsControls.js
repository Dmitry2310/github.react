import style from './FormsControl.module.css';
import { Field } from "redux-form";


const FormControl = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={style.formControl + ' ' + (hasError ? style.error : ' ')}>
            {props.children}
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}
export const TextArea = (props) => {
    const { input, meta, children, ...restProps } = props;
    return (
        <FormControl {...props}><textarea {...input} {...restProps}></textarea></FormControl>
    )
}
export const LoginInput = (props) => {
    const { input, meta, children, ...restProps } = props;
    return (
        <FormControl {...props}><input {...input} {...restProps}></input></FormControl>
    )
}

export const createField = (placeholder, name, validators, component, props = {}, text = '') => (
    <div>
        <Field placeholder={placeholder} name={name}
        validate={validators} component={component}
        {...props}
        /> {text}
    </div>
)
