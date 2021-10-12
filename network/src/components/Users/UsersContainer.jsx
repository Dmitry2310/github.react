import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {followAC, unFollowAC, setUsersAC, setCurrentPageAC, setUsersTotalCountAC} from "../../redux/users-reducer";
import * as axios from 'axios';

class UsersAPIComponent extends React.Component {

    /*constructor(props) {
        super(props);   
    }*/

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }
    onPageChanget = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {  
        return <Users totalUsersCount={this.props.totalUsersCount}
        pageSize = {this.props.pageSize}
        currentPage = {this.props.currentPage}
        onPageChanget = {this.onPageChanget}
        unFollow = {this.props.unFollow}
        follow = {this.props.follow}
        users = {this.props.users}/>
    }
}


let mapStateToProps = (state) =>{
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unFollow: (userId) => {
            dispatch(unFollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);