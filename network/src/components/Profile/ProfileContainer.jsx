import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profile-reducer';
import { withRouter } from 'react-router';
import { WithAuthRedirect} from '../hoc/AuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 20275;
        };
        this.props.getUserProfile(userId);
    }
    render() {
        return (
            <div>
                <Profile {...this.props} profile= {this.props.profile}/>
            </div>);
    }
};

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
};

export default compose (
    connect(mapStateToProps, { getUserProfile }),
    withRouter,
    WithAuthRedirect
)(ProfileContainer);




