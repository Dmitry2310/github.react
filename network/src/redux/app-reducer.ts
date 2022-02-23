import { getAuthUserData } from './auth-reducer';
import { InferActionsType } from './redux-store';

let initialState = {
    inicialization: false
};

type initialStateType = typeof initialState;

const appReducer = (state = initialState, action: ActionsTypes): initialStateType => {

    switch (action.type) {
        case 'APP/SET_INICIALIZATION':
            return {
                ...state,
                inicialization: true
            }
        default:
            return state;
    }
}

type ActionsTypes = InferActionsType<typeof actions>

export const actions = {
    inicializationSuccess: () => ({ type: 'APP/SET_INICIALIZATION' } as const)
}

//type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(() => { dispatch(actions.inicializationSuccess()) });
}



export default appReducer;