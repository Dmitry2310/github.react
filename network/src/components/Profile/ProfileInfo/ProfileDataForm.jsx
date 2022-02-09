import React from "react";
import { reduxForm } from "redux-form";
import style from './ProfileData.module.css';
import { createField, LoginInput, TextArea } from './../../common/FormsControls/FormsControls';
import { required } from '../../../utilits/validators/validators';

const ProfileDataForm = ({ profile, handleSubmit, error }) => {
    return (
        <form className={style.description} onSubmit={handleSubmit}>
            <div className={style.wrapper}>
                {error &&
                    <div className={style.formSummaryError}>
                        {error}
                    </div>}
                <div className={style.editButton}> <button >Save</button> </div>
                <div className={style.item}>
                    <div className={style.userName}><b>Name</b>
                        : {createField('Full Name', 'fullName', [required], LoginInput)}
                    </div>
                </div>

                <div className={style.item}><b>Looking for a job</b> :
                    {createField('', 'lookingForAJob', [], LoginInput, { type: 'checkbox' })}
                </div>

                <div className={style.item}>
                    <b>My professional skills</b> :
                    {createField('My professional skills', 'lookingForAJobDescription', [], TextArea)}
                </div>
                <div className={style.item}>
                    <b>About me</b> :{profile.AboutMe}
                    {createField('About me', 'aboutMe', [], TextArea)}
                </div>
            </div>
            <div className={style.contacts}>
                <b>Contacts</b> : {Object.keys(profile.contacts).map(key => {
                    return (
                        <div key={key} className={style.contact}>
                            <b>{key}: {createField(key, 'contacts.' + key, [], LoginInput)}</b>
                        </div>
                    )
                })}
            </div>

        </form>
    )
}

const ProfileDataFormReduxform = reduxForm({ form: 'edit-profile' })(ProfileDataForm);

export default ProfileDataFormReduxform;