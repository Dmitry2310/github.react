import style from './ProfileInfo.module.css';
import Preloader from './../../common/preloader/Preloader';
import userPhoto from './../../Users/assets/images/user.png';
import bgImage from './../Assets/Images/bg.jpg';
import ProfileSatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div className={style.bgDescription}>
      <img src={bgImage} className={style.bgImg} />
      <div className={style.avatarContainer}>
        <img src={props.profile.photos.small != null ? props.profile.photos.small : userPhoto} />
      </div>
      <div className={style.description}>
        <div className={style.item}>
          <div className={style.userName}>{props.profile.fullName}</div>
        </div>
        <div className={style.item}>
          < ProfileSatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        </div>
        <div className={style.item}>{props.profile.aboutMe}</div>
        <div className={style.item}>{props.profile.lookingForAJobDescription}</div>
        <div className={style.item}>{ }</div>
      </div>
    </div>
  );
}

export default ProfileInfo;