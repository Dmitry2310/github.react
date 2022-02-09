import { getAuthUserData } from './auth-reducer';

const SET_INICIALIZATION = 'SET_INICIALIZATION';

type initialStateType = {
    inicialization: boolean
};

let initialState: initialStateType = {
    inicialization: false
};

const appReducer = (state = initialState, action: any): initialStateType => {

    switch (action.type) {
        case SET_INICIALIZATION:
            return {
                ...state,
                inicialization: true
            }
        default:
            return state;
    }
}

type inicializationSuccessActionType = {
    type: typeof SET_INICIALIZATION
}

export const inicializationSuccess = (): inicializationSuccessActionType => ({ type: SET_INICIALIZATION })

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(() => { dispatch(inicializationSuccess()) });
}



export default appReducer;