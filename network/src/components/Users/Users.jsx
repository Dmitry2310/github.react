
import React from 'react';
import style from './Users.module.css';
import * as axios from 'axios';
import userPhoto from './assets/images/user.png';

class Users extends React.Component {

    /*constructor(props) {
        super(props);   
    }*/

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items);
        })
    }

    render() {
        return <div>
            {this.props.users.map((user) =>
                <div key={user.id} className={style.human}>
                    <div className={style.avatar}><img src={user.photos.small != null ? user.photos.small : userPhoto} alt="picture" /></div>
                    <div className={style.users}>
                        <div className={style.item}>{user.name}</div>
                        <div className={style.item}>{user.status}</div>
                        <div className={style.item}>{user.age}</div>
                        <div className={style.item}>{"user.location.city"}</div>
                        <div className={style.item}>{"user.location.country"}</div>
                    </div>
                    <div className={style.but}>
                        {user.followed
                            ? <button onClick={() => { this.props.unFollow(user.id) }}>Unsubscribe</button>
                            : <button onClick={() => { this.props.follow(user.id) }}>Sibscribe</button>
                        }
                    </div>
                </div>
            )}
        </div>
    }
}

export default Users;