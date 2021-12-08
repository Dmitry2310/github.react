
import React from 'react';
import Pagination from '../common/Paginator/Pagination';
import User from './User';



let Users = ({ currentPage, onPageChanget, totalUsersCount, pageSize, ...props }) => {
    return (
        <div>
            < Pagination currentPage={currentPage} onPageChanget={onPageChanget}
                pageSize={pageSize} totalItemsCount={totalUsersCount}/>

            {props.users.map((user) => < User user={user} key={user.id}
                followingInProgress={props.followingInProgress}
                follow={props.follow} unFollow={props.unFollow} />)
            }
        </div>
    )
}

export default Users;