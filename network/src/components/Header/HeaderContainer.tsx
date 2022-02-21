import React from "react";
import Header, { PropsType } from "./Header";
import { connect } from "react-redux";
import { logout} from '../../redux/auth-reducer';
import { AppStateType } from "../../redux/redux-store";

type MapStatePropsType = {
    isAuth: boolean,
    login?: string | null
}

type MapDispatchPropsType = {
    logout: () => void
}

class HeaderContainer extends React.Component<PropsType> {
    render() {
        return (
            <Header {...this.props} />
        )
    }
}
const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}
export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, { logout })(HeaderContainer);