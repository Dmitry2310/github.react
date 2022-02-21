//import { createSelector } from 'reselect';
/*export const requestUser = createSelector(requestUserSelector, (users) => {
    return users.filter(u => true);
})*/

import { AppStateType } from "./redux-store"

export const requestUserSelector = (state: AppStateType) => {
    return state.usersPage.users
}
export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress
}
export const getUsersFilter = (state: AppStateType)  => {
    return state.usersPage.filter
}
