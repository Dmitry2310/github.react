import style from './Users.module.css';

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            { id: 1, followed: false, photoUrl: 'https://biographe.ru/wp-content/uploads/2018/05/312231213231-681x1024.jpg', fullName: 'Dmitry', profession: 'Software Engineer', age: 30, location: { city: 'Minsk', country: 'Belarus' } },
            { id: 2, followed: true, photoUrl: 'https://avatars.mds.yandex.net/get-zen_doc/198002/pub_5c8d12c2d1eee700b32fcdce_5c8d144041088100b4f9e85b/scale_1200', fullName: 'Svetlana', profession: 'Model at Fashion', age: 25, location: { city: 'Moscow', country: 'Russia' } },
            { id: 3, followed: false, photoUrl: 'https://proza.ru/pics/2011/02/06/219.jpg', fullName: 'David', profession: 'Writer at Newspaper', age: 44, location: { city: 'Rop', country: 'Germany' } }
        ]);
    }

   
    return (
        <div>
            {props.users.map((user) =>
                <div key={user.id} className={style.human}>
                    <div className={style.avatar}><img src={user.photoUrl} alt="picture" /></div>
                    <div className={style.users}>
                        <div className={style.item}>{user.fullName}</div>
                        <div className={style.item}>{user.profession}</div>
                        <div className={style.item}>{user.age}</div>
                        <div className={style.item}>{user.location.city}</div>
                        <div className={style.item}>{user.location.country}</div>
                    </div>
                    <div className={style.but}>
                        {user.followed
                            ? <button onClick={() => { props.unFollow(user.id) }}>Unsubscribe</button>
                            : <button onClick={() => { props.follow(user.id) }}>Sibscribe</button>}
                    </div>
                </div>
             ) }
        </div>
    )
};

export default Users;