import React from "react";
import Users from "./Users";
import { connect } from 'react-redux';
import { follow, unFollow, setCurrentPage, setFollowingProgress, getUsers, changePage } from "../../redux/users-reducer";
import Preloader from "../common/preloader/Preloader";
import { requestUser, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from './../../redux/user-selector';
import { compose } from "redux";


class UsersConteiner extends React.Component {

    /*constructor(props) {
        super(props);   
    }*/

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    onPageChanget = (pageNumber) => {
        this.props.changePage(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanget={this.onPageChanget}
                unFollow={this.props.unFollow}
                follow={this.props.follow}
                users={this.props.users}
                followingInProgress={this.props.followingInProgress} />
        </>
    }
};

/*let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};*/

let mapStateToProps = (state) => {
    return {
        users: requestUser(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
};

export default compose(
    connect(mapStateToProps, {
        follow, unFollow, setCurrentPage,
        setFollowingProgress, getUsers, changePage
    })
)(UsersConteiner);
