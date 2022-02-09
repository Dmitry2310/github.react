import usersAPI from "../api/api";
import { userType } from './types/types';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';



let initialState = {
    users: [] as Array<userType>,
    pageSize: 20 as number,
    totalUsersCount: 0 as number,
    currentPage: 1 as number,
    isFetching: true,
    followingInProgress: [] as Array<number>
};

type initialStateType = typeof initialState;

const usersReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                /*users: updateObjectInArray(state.users, action.userId, 'id', { followed: true })*/
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
                        return { ...user, followed: false }
                    }
                    return user;
                })
            }
        case SET_USERS:
            return { ...state, users: action.users }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.count }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}
type followSuccessActionType = {
    type: typeof FOLLOW,
    userId: number
}
export const followSuccess = (userId: number): followSuccessActionType => ({ type: FOLLOW, userId })

type unFollowSuccessActionType = {
    type: typeof UNFOLLOW,
    userId: number
}
export const unFollowSuccess = (userId: number): unFollowSuccessActionType => ({ type: UNFOLLOW, userId })

type setUsersActionType = {
    type: typeof SET_USERS,
    users: Array<userType>
}
export const setUsers = (users: Array<userType>): setUsersActionType => ({ type: SET_USERS, users })

type setCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE,
    currentPage: number
}
export const setCurrentPage = (currentPage: number): setCurrentPageActionType => ({ type: SET_CURRENT_PAGE, currentPage: currentPage })

type setUsersTotalCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT,
    count: number
}
export const setUsersTotalCount = (totalUsersCount: number): setUsersTotalCountActionType => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })

type setIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING,
    isFetching: boolean
}
export const setIsFetching = (isFetching: boolean): setIsFetchingActionType => ({ type: TOGGLE_IS_FETCHING, isFetching })

type setFollowingProgressActionType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching: boolean,
    userId: number
}
export const setFollowingProgress = (isFetching: boolean, userId: number): setFollowingProgressActionType => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })

export const getUsers = (currentPage: number, pageSize: number) => async (dispatch: any) => {
    dispatch(setIsFetching(true));
    let data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(setIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setUsersTotalCount(data.totalCount));
}

export const changePage = (pageNumber: number, pageSize: number) => async (dispatch: any) => {
    dispatch(setCurrentPage(pageNumber));
    dispatch(setIsFetching(true));
    let data = await usersAPI.getUsers(pageNumber, pageSize);
    dispatch(setIsFetching(false));
    dispatch(setUsers(data.items));

}
const followUnFollowFlow = async (dispatch: any, userId: number, apiMethod: any, actionCreator: any) => {
    dispatch(setFollowingProgress(true, userId));
    let data = await apiMethod(userId);
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(setFollowingProgress(false, userId));
}

export const follow = (userId: number) => async (dispatch: any) => {
    followUnFollowFlow(dispatch, userId, usersAPI.followAPI.bind(usersAPI), followSuccess);
}
export const unFollow = (userId: number) => async (dispatch: any) => {
    followUnFollowFlow(dispatch, userId, usersAPI.unFollowAPI.bind(usersAPI), unFollowSuccess);
}

export default usersReducer;