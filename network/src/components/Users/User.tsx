
import React from 'react';
import style from './Users.module.css';
import userPhoto from './assets/images/user.png';
import { NavLink } from 'react-router-dom';
import { UserType } from '../../redux/types/types';
import { Button } from 'antd';

type PropsType = {
    user: UserType,
    followingInProgress: Array<number>,
    unFollow: (userId: number) => void, 
    follow: (userId: number) => void
}

const User: React.FC<PropsType> = ({ user, followingInProgress, unFollow, follow }) => {
    return (
        <div className={style.human}>
            <NavLink to={'/profile/' + user.id}>
                <div className={style.avatar}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} alt={''} />
                </div>
            </NavLink>
            <div className={style.users}>
                <div className={style.item}>{user.name}</div>
                <div className={style.item}>{user.status}</div>
                <div className={style.item}>{"user.age"}</div>
                <div className={style.item}>{"user.location.city"}</div>
                <div className={style.item}>{"user.location.country"}</div>
            </div>
            <div className={style.but}>
                {user.followed ?
                    <Button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        unFollow(user.id);
                    }}>Unsubscribe</Button>
                    : <Button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        follow(user.id);
                    }}>Subscribe</Button>
                }
            </div>
        </div>
    )
}

export default User;