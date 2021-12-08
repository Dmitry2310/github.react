
import React, { useState } from 'react';
import style from './Pagination.module.css';


let Pagination = ({ totalItemsCount, pageSize, currentPage, onPageChanget, portionSize = 10 }) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftBorder = (portionNumber - 1) * portionSize + 1;
    let rightBorder = portionNumber * portionSize;
    return (
        <div className={style.paginator}>

            {portionNumber > 1 && < button className={style.button}
                onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>
            }

            {pages.filter(page => page >= leftBorder && page <= rightBorder).map((page) => {
                return (<span className={ currentPage === page && style.selectedPage}
                    key={page}
                    onClick={(e) => { onPageChanget(page); }}>{page}</span>
                )
            })
            }

            {portionCount > portionNumber && < button className={style.button}
                onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>
            }
        </div>)
}

export default Pagination;