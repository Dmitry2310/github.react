import React from "react";
import Users from "./Users";
import { connect } from 'react-redux';
import { follow, unFollow, getUsers, FilterType } from "../../redux/users-reducer";
import Preloader from "../common/preloader/Preloader";
import { requestUserSelector, getPageSize, getTotalUsersCount, getCurrentPage, getUsersFilter, getIsFetching, getFollowingInProgress } from '../../redux/user-selector';
import { compose } from "redux";
import { UserType } from "../../redux/types/types";
import { AppStateType } from "../../redux/redux-store";

type MapStatePropsType = {
    currentPage: number,
    pageSize: number,
    isFetching: boolean,
    totalUsersCount: number,
    users: Array<UserType>,
    followingInProgress: Array<number>,
    filter: FilterType
}
type MapDispatchPropsType = {
    getUsers: (currentPage: number, pageSize: number, term: string) => void,
    unFollow: (userId: number) => void,
    follow: (userId: number) => void
}
type OwnPropsType = {}

type PropsType = OwnPropsType & MapDispatchPropsType & MapStatePropsType

class UsersContainer extends React.Component<PropsType> {

    componentDidMount() {
        const { currentPage, pageSize } = this.props;
        this.props.getUsers(currentPage, pageSize, '');
    }

    onPageChanget = (pageNumber: number) => {
        const { pageSize, filter } = this.props;
        this.props.getUsers(pageNumber, pageSize, filter.term);
    }

    onFilterChanged = (filter: FilterType) => {
        const { pageSize } = this.props;
        this.props.getUsers(1, pageSize, filter.term);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanget={this.onPageChanget}
                unFollow={this.props.unFollow}
                onFilterChanged={this.onFilterChanged}
                follow={this.props.follow}
                users={this.props.users}
                followingInProgress={this.props.followingInProgress} />
        </>
    }
};

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: requestUserSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        filter: getUsersFilter(state)
    }
};

export default compose(connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
    mapStateToProps, { follow, unFollow, getUsers }))(UsersContainer);