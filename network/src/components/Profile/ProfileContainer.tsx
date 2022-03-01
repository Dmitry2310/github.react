import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile } from '../../redux/profile-reducer';
import { RouteComponentProps, withRouter } from 'react-router';
import { WithAuthRedirect } from '../hoc/AuthRedirect';
import { compose } from 'redux';
import { AppStateType } from '../../redux/redux-store';
import { ProfileType } from '../../redux/types/types';

type MapStateToPropsType = {
    profile: ProfileType | null,
    status: string,
    autorizedUserId: number,
    isAuth: boolean
}
type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void,
    getStatus: (userId: number) => void,
    updateStatus: (status: string) => void,
    savePhoto: (file: File) => void,
    saveProfile: (profile: ProfileType) => Promise<any>
}
type PathParamsType = {
    userId: string,          // в параметрах всегда string // hz
}
type PropsType = MapStateToPropsType & MapDispatchPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<PropsType> {

    refreshProfile = () => {
        let userId: number | null = +this.props.match.params.userId; // делаем из строки что то
        if (!userId) {
            userId = this.props.autorizedUserId;
            if (!userId) {
                this.props.history.push('/login');
            }
        };
        if (!userId) {
            console.log('ID should be exist');
        } else {
            this.props.getUserProfile(userId);
            this.props.getStatus(userId);
        }

    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps: PropsType, prevState: PropsType) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) { this.refreshProfile(); }
    }

    render() {
        return (
            <div>
                <Profile {...this.props} isOwner={!this.props.match.params.userId} profile={this.props.profile} status={this.props.status}
                    updateStatus={this.props.updateStatus} savePhoto={this.props.savePhoto} saveProfile={this.props.saveProfile} />
            </div>);
    }
};

let mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        autorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
};

export default compose< React.ComponentType>(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile }),
    withRouter, WithAuthRedirect)(ProfileContainer);




