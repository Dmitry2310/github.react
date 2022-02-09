import style from './ProfileInfo.module.css';
import Preloader from './../../common/preloader/Preloader';
import userPhoto from './../../Users/assets/images/user.png';
import bgImage from './../Assets/Images/bg.jpg';
import ProfileSatusWithHooks from './ProfileStatusWithHooks';
import React, { useState } from 'react';
import ProfileDataFormReduxform from './ProfileDataForm';

const ProfileInfo = (props) => {

  let [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return <Preloader />
  }

  const mainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  }

  const onSubmitFunc = (formData) => {
    props.saveProfile(formData).then(
      () => {
        setEditMode(false);
      }
    );
  }

  return (

    <div className={style.bgDescription}>
      <img src={bgImage} alt={''} className={style.bgImg} />
      <span className={style.title}>Change photo</span>
      {props.isOwner && <input type={'file'} onChange={mainPhotoSelected} />}
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

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div className={style.description}>
      {isOwner && <div className={style.editButton}> <button onClick={goToEditMode}>Edit</button> </div>}
      <div className={style.item}>
        <div className={style.userName}><b>Name</b> : {profile.fullName}</div>
      </div>

      <div className={style.item}>
        <b>Looking for a job</b> :{profile.lookingForAJob ? 'yes' : 'no'}
      </div>
      {profile.lookingForAJob &&
        <div className={style.item}>
          <b>My skills</b> :{profile.lookingForAJobDescription}
        </div>
      }
      <div className={style.item}>
        <b>About me</b> :{profile.aboutMe}
      </div>
      <div className={style.item}>
        <b>Contacts</b> : {Object.keys(profile.contacts).map(key => {
          return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
        })}
      </div>
    </div>
  )
}

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={style.contact}>
      <b> {contactTitle} </b> : {contactValue}
    </div>
  )
}
export default ProfileInfo;