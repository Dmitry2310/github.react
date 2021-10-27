
import React from 'react';
import style from './Users.module.css';
import userPhoto from './assets/images/user.png';
import { NavLink } from 'react-router-dom';


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(page => {
                    return <span className={props.currentPage === page && style.selectedPage}
                        onClick={(e) => { props.onPageChanget(page); }}>{page}</span>
                })}
            </div>
            {props.users.map((user) =>
                <div key={user.id} className={style.human}>
                    <NavLink to={'/profile/' + user.id}>
                        <div className={style.avatar}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="picture" />
                        </div>
                    </NavLink>
                    <div className={style.users}>
                        <div className={style.item}>{user.name}</div>
                        <div className={style.item}>{user.status}</div>
                        <div className={style.item}>{user.age}</div>
                        <div className={style.item}>{"user.location.city"}</div>
                        <div className={style.item}>{"user.location.country"}</div>
                    </div>
                    <div className={style.but}>
                        {user.followed ?
                            <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                props.unFollow(user.id);
                            }}>Unsubscribe</button>
                            : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                props.follow(user.id);
                            }}>Sibscribe</button>
                        }
                    </div>
                </div>
            )
            }
        </div >
    )
}

export default Users;