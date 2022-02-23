import { Dispatch } from "redux";
import { ResponseTypes } from "../api/api";
import usersAPI from "../api/usersApi";
import { BaseThunkType, InferActionsType } from "./redux-store";
import { UserType } from './types/types';

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 20 as number,
    totalUsersCount: 0 as number,
    currentPage: 1 as number,
    isFetching: true,
    followingInProgress: [] as Array<number>,
    filter: {
        term: '',
        friend: null as null | boolean
    }
};

export type initialStateType = typeof initialState;
export type FilterType = typeof initialState.filter;

const usersReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case 'USER/FOLLOW':
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
        case 'USER/UNFOLLOW':
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    }
                    return user;
                })
            }
        case 'USER/SET_USERS':
            return { ...state, users: action.users }
        case 'USER/SET_CURRENT_PAGE':
            return { ...state, currentPage: action.currentPage }
        case 'USER/SET_TOTAL_USERS_COUNT':
            return { ...state, totalUsersCount: action.count }
        case 'USER/TOGGLE_IS_FETCHING':
            return { ...state, isFetching: action.isFetching }
        case 'USER/SET_FILTER':
            return { ...state, filter: action.payload }
        case 'USER/TOGGLE_IS_FOLLOWING_PROGRESS':
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

type ActionsTypes = InferActionsType<typeof actions>

export const actions = {
    followSuccess: (userId: number) => ({ type: 'USER/FOLLOW', userId } as const),
    unFollowSuccess: (userId: number) => ({ type: 'USER/UNFOLLOW', userId } as const),
    setUsers: (users: Array<UserType>) => ({ type: 'USER/SET_USERS', users } as const),
    setCurrentPage: (currentPage: number) => ({ type: 'USER/SET_CURRENT_PAGE', currentPage: currentPage } as const),
    setFilter: (filter: FilterType) => ({ type: 'USER/SET_FILTER', payload: filter } as const),
    setUsersTotalCount: (totalUsersCount: number) => ({ type: 'USER/SET_TOTAL_USERS_COUNT', count: totalUsersCount } as const),
    setIsFetching: (isFetching: boolean) => ({ type: 'USER/TOGGLE_IS_FETCHING', isFetching } as const),
    setFollowingProgress: (isFetching: boolean, userId: number) => ({ type: 'USER/TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, userId } as const)
}

type DispatchType = Dispatch<ActionsTypes>;
type ThunkType = BaseThunkType<ActionsTypes>

export const getUsers = (currentPage: number, pageSize: number, filter: FilterType): ThunkType => async (dispatch) => {
    dispatch(actions.setCurrentPage(currentPage));
    dispatch(actions.setIsFetching(true));
    dispatch(actions.setFilter(filter));
    let data = await usersAPI.getUsers(currentPage, pageSize, filter.term, filter.friend);
    dispatch(actions.setIsFetching(false));
    dispatch(actions.setUsers(data.items));
    dispatch(actions.setUsersTotalCount(data.totalCount));
}

const followUnFollowFlow = async (dispatch: DispatchType, userId: number, apiMethod: (userId: number) => Promise<ResponseTypes>,
    actionCreator:
        (userId: number) => ActionsTypes) => {
    dispatch(actions.setFollowingProgress(true, userId));
    let data = await apiMethod(userId);
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(actions.setFollowingProgress(false, userId));
}

export const follow = (userId: number): ThunkType =>
    async (dispatch) => {
        await followUnFollowFlow(dispatch, userId, usersAPI.followAPI.bind(usersAPI), actions.followSuccess);
    }
export const unFollow = (userId: number): ThunkType =>
    async (dispatch) => {
        await followUnFollowFlow(dispatch, userId, usersAPI.unFollowAPI.bind(usersAPI), actions.unFollowSuccess);
    }

export default usersReducer;

//type getStateType = () => AppStateType;