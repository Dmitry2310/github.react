import React from "react";
import { Redirect } from "react-router";
import { connect } from 'react-redux';
import { AppStateType } from "../../redux/redux-store";

let mapStateToPropsForRedirect = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth
    }
};
type MapStatePropsType = {
    isAuth: boolean
}
type MapDispatchPropsType = {
}

export function WithAuthRedirect<WCP>(Component: React.ComponentType) {

    const RedirectComponent: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
        if (!props.isAuth) return <Redirect to={'/login'} />;
        let { isAuth, ...restProps } = props;
        return <Component {...restProps as WCP} />
    }

    let ConnectedAuthRedirectComponent = connect<MapStatePropsType, MapDispatchPropsType, WCP, AppStateType>(mapStateToPropsForRedirect, {})
        (RedirectComponent);

    return ConnectedAuthRedirectComponent;

};