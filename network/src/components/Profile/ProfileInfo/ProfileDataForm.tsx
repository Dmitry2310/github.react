import React from "react";
import { InjectedFormProps, reduxForm } from "redux-form";
import style from './ProfileData.module.css';
import { createField, GetStringKeys, LoginInput, TextArea } from '../../common/FormsControls/FormsControls';
import { required } from '../../../utilits/validators/validators';
import { ProfileType } from "../../../redux/types/types";

type ProfileDataFormOwnProps = {
    profile: ProfileType
}
type ProfileTypeKeys = GetStringKeys<ProfileType>
const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, ProfileDataFormOwnProps> & ProfileDataFormOwnProps> = ({ profile, handleSubmit, error }) => {
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
                        : {createField<ProfileTypeKeys>('Full Name', 'fullName', [required], LoginInput)}
                    </div>
                </div>

                <div className={style.item}><b>Looking for a job</b> :
                    {createField<ProfileTypeKeys>('', 'lookingForAJob', [], LoginInput, { type: 'checkbox' })}
                </div>

                <div className={style.item}>
                    <b>My professional skills</b> :
                    {createField<ProfileTypeKeys>('My professional skills', 'lookingForAJobDescription', [], TextArea)}
                </div>
                <div className={style.item}>
                    <b>About me</b> :
                    {createField<ProfileTypeKeys>('About me', 'aboutMe', [], TextArea)}
                </div>
            </div>
            <div><b>Contacts</b> : </div>
            <div className={style.contacts}>
                {Object.keys(profile.contacts).map(key => {
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

const ProfileDataFormReduxform = reduxForm<ProfileType, ProfileDataFormOwnProps>({ form: 'edit-profile' })(ProfileDataForm);

export default ProfileDataFormReduxform;