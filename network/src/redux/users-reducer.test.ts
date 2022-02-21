import usersReducer, { actions, initialStateType } from './users-reducer';


// create state
let state: initialStateType;

beforeEach(() => {
    state = {
        users: [
            { id: 0, name: 'Dim0', followed: false, photos: { small: null, large: null }, status: 'status 0' },
            { id: 1, name: 'Dim1', followed: false, photos: { small: null, large: null }, status: 'status 1' },
            { id: 2, name: 'Dim2', followed: true, photos: { small: null, large: null }, status: 'status 2' },
            { id: 3, name: 'Dim3', followed: true, photos: { small: null, large: null }, status: 'status 3' }
        ],
        pageSize: 20,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false,
        followingInProgress: []
    };
})

test('follow success', () => {
    // import Reducer and create a const
    const newState = usersReducer(state, actions.followSuccess(1))

    // 
    expect(newState.users[0].followed).toBeFalsy();
    expect(newState.users[1].followed).toBeTruthy();
}) 

test('unFollow success', () => {
    // import Reducer and create a const
    const newState = usersReducer(state, actions.unFollowSuccess(3))

    // 
    expect(newState.users[2].followed).toBeTruthy();
    expect(newState.users[3].followed).toBeFalsy();
}) 