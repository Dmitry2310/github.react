import style from './Profile.module.css';

const Profile = () => {
    return (
        <div className={style.content}>
          <div className={style.bgDescription}>
            <div className={style.avatar}></div>
            <div className={style.description}>ghghghghghgh</div>
          </div>
          <div>
            My posts
           <div>new post</div>
           <div className={style.posts}>
             <div className={style.item}>
               post1
             </div>
             <div className={style.item}>
               post2
             </div>
           </div>
          </div>
      </div>);
}

export default Profile;