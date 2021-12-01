
import React from 'react';
import style from './Pagination.module.css';


let Pagination = ({ totalUsersCount, pageSize, currentPage, onPageChanget }) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            {pages.map(page => {
                return <span className={currentPage === page && style.selectedPage}
                    onClick={(e) => { onPageChanget(page); }}>{page}</span>
            })}
        </div>
    )
}

export default Pagination;