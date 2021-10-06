const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {users :[
    { id: 1, followed: false, photoUrl: 'https://biographe.ru/wp-content/uploads/2018/05/312231213231-681x1024.jpg', fullName: 'Dmitry', profession: 'Software Engineer', age: 30, location: { city: 'Minsk', country: 'Belarus' } },
    { id: 2, followed: true, photoUrl: 'https://avatars.mds.yandex.net/get-zen_doc/198002/pub_5c8d12c2d1eee700b32fcdce_5c8d144041088100b4f9e85b/scale_1200', fullName: 'Svetlana', profession: 'Model at Fashion', age: 25, location: { city: 'Moscow', country: 'Russia' } },
    { id: 3, followed: false, photoUrl: 'https://proza.ru/pics/2011/02/06/219.jpg', fullName: 'David', profession: 'Writer at Newspaper', age: 44, location: { city: 'Rop', country: 'Germany' } }
]};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    }
                    return user;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false }    
                    }
                    return user;
                })
            }
        case SET_USERS:
            {return {...state, users: [...state.users, ...action.users]}}
        default:
            return state;
    }
}
export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unFollowAC = (userId) => ({ type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer;