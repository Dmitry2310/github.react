import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div>
          <div className={style.bgDescription}>
            <div className={style.avatar}></div>
            <div className={style.description}>ghghghghghgh</div>
          </div>
          <MyPosts />
      </div>);
}

export default Profile;