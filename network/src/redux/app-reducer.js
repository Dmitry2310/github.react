import { getAuthUserData } from './auth-reducer';

const SET_INICIALIZATION = 'SET_INICIALIZATION';

let initialState = {
    inicialization: false
};

const appReducer = (state = initialState, action) => {

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
export const inicializationSuccess = () => ({ type: SET_INICIALIZATION })

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(() => { dispatch(inicializationSuccess()) });
}



export default appReducer;