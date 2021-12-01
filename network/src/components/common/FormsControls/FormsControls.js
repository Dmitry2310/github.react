import style from './FormsControl.module.css';
import { Field } from "redux-form";


const FormControl = ({ input, meta, children, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={style.formControl + ' ' + (hasError ? style.error : ' ')}>
            {props.children}
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}
export const TextArea = (props) => {
    const { input, meta, child, ...restProps } = props;
    return (
        <FormControl {...props}><textarea {...input} {...restProps}></textarea></FormControl>
    )
}
export const LoginInput = (props) => {
    const { input, meta, child, ...restProps } = props;
    return (
        <FormControl {...props}><input {...input} {...restProps}></input></FormControl>
    )
}
export const createField = (placeholder, name, validators, component) => <Field placeholder={placeholder}
    name={name} component={component}
    validate={validators} />