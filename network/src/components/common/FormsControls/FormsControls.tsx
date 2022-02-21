import style from './FormsControl.module.css';
import { Field, WrappedFieldMetaProps, WrappedFieldProps } from "redux-form";
import { FieldValidatorType } from '../../../utilits/validators/validators';

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
}

const FormControl: React.FC<FormControlPropsType> = ({ meta: { touched, error }, children }) => {
    const hasError = touched && error;
    return (
        <div className={style.formControl + ' ' + (hasError ? style.error : ' ')}>
            {children}
            {hasError && <span>{error}</span>}
        </div>
    )
}
export const TextArea: React.FC<WrappedFieldProps> = (props) => {
    const { input, meta, children, ...restProps } = props;
    return (
        <FormControl {...props}><textarea {...input} {...restProps}></textarea></FormControl>
    )
}
export const LoginInput: React.FC<WrappedFieldProps> = (props) => {
    const { input, meta, children, ...restProps } = props;
    return (
        <FormControl {...props}><input {...input} {...restProps}></input></FormControl>
    )
}

export function createField<FormsKeyType extends string>(placeholder: string | undefined, name: FormsKeyType, validators: Array<FieldValidatorType>, component: React.FC<WrappedFieldProps>,
    props = {}, text = '') {
    return <div>
        <Field placeholder={placeholder} name={name}
            validate={validators} component={component}
            {...props}
        /> {text}
    </div>
}

export type GetStringKeys<T> = Extract< keyof T, string>