import React, { FC, useEffect } from 'react';
import Pagination from '../common/Paginator/Pagination';
import User from './User';
import UsersSearchForm from './UsersSearchForm';
import { FilterType, getUsers, follow, unFollow } from '../../redux/users-reducer';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentPage, getFollowingInProgress, getPageSize, getTotalUsersCount, getUsersFilter, requestUserSelector } from '../../redux/user-selector';

type PropsType = {}

export const Users: FC<PropsType> = (props) => {

    const totalUsersCount = useSelector(getTotalUsersCount)
    const users = useSelector(requestUserSelector)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getUsersFilter)
    const followingInProgress = useSelector(getFollowingInProgress)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers(currentPage, pageSize, filter))
    }, [])

    const onPageChanget = (pageNumber: number) => {
        dispatch(getUsers(pageNumber, pageSize, filter))
    }
    const onFilterChanged = (filter: FilterType) => {
        dispatch(getUsers(1, pageSize, filter));
    }
    const unFollowC = (userId: number) => {
        dispatch(unFollow(userId))
    }
    const followC = (userId: number) => {
        dispatch(follow(userId))
    }

    return (
        <div>
            < UsersSearchForm onFilterChanged={onFilterChanged} />
            < Pagination currentPage={currentPage} onPageChanget={onPageChanget}
                pageSize={pageSize} totalItemsCount={totalUsersCount} />

            {users.map((user) => < User user={user} key={user.id}
                followingInProgress={followingInProgress}
                follow={followC} unFollow={unFollowC} />)
            }
        </div>
    )
}