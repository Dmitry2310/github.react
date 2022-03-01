//import { createSelector } from 'reselect';
/*export const requestUser = createSelector(requestUserSelector, (users) => {
    return users.filter(u => true);
})*/

import { AppStateType } from "./redux-store"

export const selectIsAuth = (state: AppStateType) => {
    return state.auth.isAuth
}
export const selectUserLogin = (state: AppStateType) => {
    return state.auth.login
}
