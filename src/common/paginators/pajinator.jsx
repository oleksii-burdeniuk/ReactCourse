import React from "react";
import s from '../../Users/users.module.css'


let Paginator = ({ totalUsersCount, pageSize, currentPage, onPageChanged, ...props }) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            {pages.map(p => {

                return (
                    <span
                        key={p}
                        className={currentPage === p ? s.selectedPage : ''}
                        onClick={(e) => {
                            onPageChanged(p)
                        }}
                    >
                        {p}
                    </span>
                )
            })}
        </div>)

};

export default Paginator;