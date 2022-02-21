import { FC } from 'react';
import Pagination from '../common/Paginator/Pagination';
import User from './User';
import { UserType } from './../../redux/types/types';
import UsersSearchForm from './UsersSearchForm';
import { FilterType } from '../../redux/users-reducer';

type PropsType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanget: (pageNumber: number) => void,
    onFilterChanged: (filter: FilterType) => void,
    users: Array<UserType>,
    followingInProgress: Array<number>,
    unFollow: (userId: number) => void,
    follow: (userId: number) => void
}

let Users: FC<PropsType> = ({ currentPage, onPageChanget, totalUsersCount, pageSize, users, ...props }) => {
    return (
        <div>
            < UsersSearchForm onFilterChanged= {props.onFilterChanged}/>
            < Pagination currentPage={currentPage} onPageChanget={onPageChanget}
                pageSize={pageSize} totalItemsCount={totalUsersCount} />

            {users.map((user) => < User user={user} key={user.id}
                followingInProgress={props.followingInProgress}
                follow={props.follow} unFollow={props.unFollow} />)
            }
        </div>
    )
}

export default Users;