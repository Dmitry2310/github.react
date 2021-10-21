import React from "react";
import Users from "./Users";
import { connect } from 'react-redux';
import { follow, unFollow, setUsers, setCurrentPage, setUsersTotalCount, setIsFetching } from "../../redux/users-reducer";
import Preloader from "../common/preloader/Preloader";
import  usersAPI  from "./../../api/api";



class UsersAPIComponent extends React.Component {

    /*constructor(props) {
        super(props);   
    }*/

    componentDidMount() {
        this.props.setIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setUsersTotalCount(data.totalCount);
        })
    }
    onPageChanget = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setIsFetching(true);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setIsFetching(false);
            this.props.setUsers(data.items);
        });
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
                users={this.props.users} />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {
    follow, unFollow, setUsers, setCurrentPage, setUsersTotalCount, setIsFetching
})(UsersAPIComponent);