import style from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';
import userPhoto from './../../Users/assets/images/user.png';
import bgImage from './../Assets/Images/bg.jpg';
import ProfileSatusWithHooks from './ProfileStatusWithHooks';
import React, { ChangeEvent, useState } from 'react';
import ProfileDataFormReduxform from './ProfileDataForm';
import { ContactsType, ProfileType } from '../../../redux/types/types';
import { Button } from 'antd';

type ProfileInfoType = {
  profile: ProfileType | null,
  isOwner: boolean,
  status: string,
  updateStatus: (status: string) => void,
  savePhoto: (file: File) => void,
  saveProfile: (profileType: ProfileType) => void
}

const ProfileInfo: React.FC<ProfileInfoType> = (props) => {

  let [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return <Preloader />
  }

  const mainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      props.savePhoto(e.target.files[0]);
    }
  }

  const onSubmitFunc = (formData: ProfileType) => {
    props.saveProfile(formData);
    setEditMode(false);
  }

  // const onSubmitFunc = (formData: ProfileType) => {
  //   props.saveProfile(formData).then(
  //     () => {
  //       setEditMode(false);
  //     }
  //   );
  // }

  return (

    <div className={style.bgDescription}>
      <img src={bgImage} alt={''} className={style.bgImg} />
      {props.isOwner &&
        <div>
          <span className={style.title}>Change photo</span>
          <input type={'file'} onChange={mainPhotoSelected} />
        </div>
      }
      <div className={style.avatarContainer}>
        <img alt={''} src={props.profile.photos.small != null ? props.profile.photos.small : userPhoto} />
      </div>
      <div className={style.itemStatus}>
        < ProfileSatusWithHooks status={props.status} updateStatus={props.updateStatus} />
      </div>
      {editMode
        ? <ProfileDataFormReduxform initialValues={props.profile} profile={props.profile} onSubmit={onSubmitFunc} />
        : < ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={() => { setEditMode(true) }} />}
    </div>
  );
}

type ProfileDataPropsType = {
  profile: ProfileType,
  isOwner: boolean,
  goToEditMode: () => void
}

const ProfileData: React.FC<ProfileDataPropsType> = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div className={style.description}>
      {isOwner &&
        <Button className={style.editButton} onClick={goToEditMode}>
          Edit
        </Button>}
      <div className={style.userData}>
        <div >
          <div className={style.userName}><b>Name</b> : {profile.fullName}</div>
        </div>

        <div >
          <b>Looking for a job</b> :{profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        {profile.lookingForAJob &&
          <div >
            <b>My skills</b> :{profile.lookingForAJobDescription}
          </div>
        }
        <div >
          <b>About me</b> :{profile.aboutMe}
        </div>
      </div>
      <div className={style.contacts}>
        <b>Contacts</b> : {Object.keys(profile.contacts).map(key => {
          return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]} />
        })}
      </div>
    </div>
  )
}

type ContactPropstype = {
  contactTitle: string,
  contactValue: string
}

const Contact: React.FC<ContactPropstype> = ({ contactTitle, contactValue }) => {
  return (
    <div className={style.contact}>
      <b> {contactTitle} </b> : {contactValue}
    </div>
  )
}
export default ProfileInfo;