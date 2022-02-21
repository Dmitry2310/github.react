import cn from 'classnames';
import React, { useState } from 'react';
import style from './Pagination.module.css';

type propsType = {
    totalItemsCount: number,
    pageSize: number,
    currentPage?: number,
    onPageChanget?: (pageNumber: number) => void,
    portionSize?: number
}

let Pagination: React.FC<propsType> = ({ totalItemsCount, pageSize, currentPage = 1, onPageChanget = x => x, portionSize = 10 }) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages: Array<number> = [];
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
                return (
                    <div className={cn({ [style.selectedPage]: currentPage === page}, style.pageNumber)}>
                        <span key={page} onClick={(e) => { onPageChanget(page); }}>{page}</span>
                    </div>
                )
            })
            }

            {portionCount > portionNumber && < button className={style.button}
                onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>
            }
        </div>)
}

export default Pagination;