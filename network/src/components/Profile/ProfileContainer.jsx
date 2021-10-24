import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profile-reducer';
import { withRouter } from 'react-router';

class ProfileAPIComponent extends React.Component {
    
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 20275;
        };
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setUserProfile(response.data);
        })
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

let UrlDataContainerComponent = withRouter(ProfileAPIComponent);

export default connect(mapStateToProps, { setUserProfile })(UrlDataContainerComponent);