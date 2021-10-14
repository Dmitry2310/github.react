import style from './ProfileInfo.module.css';
import Preloader from './../../common/preloader/Preloader';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div className={style.bgDescription}>
      <img src={props.profile.photos.large} />
      <div className={style.avatar}></div>
      <div className={style.description}>ghghghghghgh</div>
    </div>
  );
}

export default ProfileInfo;