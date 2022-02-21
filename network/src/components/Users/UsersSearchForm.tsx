import { Field, Form, Formik } from 'formik';
import { FilterType } from '../../redux/users-reducer';

const usersSearchFormValidate = (values: any) => {
    const errors = {};
    return errors;
}

type Propstype = {
    onFilterChanged: (filter: FilterType) => void
}

const UsersSearchForm: React.FC<Propstype> = ({onFilterChanged}) => {

    const submit = (values: FilterType,
        { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
            onFilterChanged(values);
            setSubmitting(false);
    }

    return (
        <div>
            <div>
                <Formik
                    initialValues={{ term: '' }}
                    validate={usersSearchFormValidate}
                    onSubmit={submit}>
                    {({ isSubmitting }) => (
                        <Form>
                            <Field type="text" name="term" />
                            <button type="submit" disabled={isSubmitting}>
                                Find
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default UsersSearchForm;