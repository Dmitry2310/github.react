import { FC, useEffect } from 'react';
import Pagination from '../common/Paginator/Pagination';
import User from './User';
import UsersSearchForm from './UsersSearchForm';
import { FilterType, getUsers, follow, unFollow } from '../../redux/users-reducer';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentPage, getFollowingInProgress, getPageSize, getTotalUsersCount, getUsersFilter, requestUserSelector } from '../../redux/user-selector';
import { useHistory } from 'react-router';

type PropsType = {}

export const Users: FC<PropsType> = (props) => {

    const totalUsersCount = useSelector(getTotalUsersCount)
    const users = useSelector(requestUserSelector)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getUsersFilter)
    const followingInProgress = useSelector(getFollowingInProgress)

    const dispatch = useDispatch()

    const history = useHistory()        // read url string as (withRouter)

    type QueryParamsType = { term?: string; page?: string; friend?: string }

    useEffect(() => {
        const querystring = require('querystring');
        const parsed = querystring.parse(history.location.search.substring(1)) as QueryParamsType // cut off the question mark

        let actualPage = currentPage
        let actualFilter = filter

        if (!!parsed.page) actualPage = Number(parsed.page)         // {!!} conversion to boolean value
        if (!!parsed.term) actualFilter = { ...actualFilter, term: parsed.term as string }

        switch (parsed.friend) {
            case 'null':
                actualFilter = { ...actualFilter, friend: null }
                break;
            case 'true':
                actualFilter = { ...actualFilter, friend: true }
                break;
            case 'false':
                actualFilter = { ...actualFilter, friend: false }
                break;
        }
        dispatch(getUsers(actualPage, pageSize, actualFilter))
    }, [])

    useEffect(() => {
        const query: QueryParamsType = {}
        const querystring = require('querystring');

        if (!!filter.term) query.term = filter.term
        if (filter.friend !== null) query.friend = String(filter.friend)
        if (currentPage !== 1) query.page = String(currentPage)

        history.push({
            pathname: '/users',
            search: querystring.stringify(query)
        })
    }, [filter, currentPage])

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
            <div style={{height: 700, overflowY: 'auto'}}>
                {users.map((user) => < User user={user} key={user.id}
                    followingInProgress={followingInProgress}
                    follow={followC} unFollow={unFollowC} />)
                }
            </div>
        </div>
    )
}