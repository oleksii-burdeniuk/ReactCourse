import React from "react";
import s from './users.module.css'
import userPhoto from '../assets/images/pngwing.png'
import { NavLink } from 'react-router-dom'
import * as axios from 'axios';
import { userAPI } from "../api/api";

let UsersComponent = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage}
                    onClick={(e) => {
                        props.onPageChanged(p)
                    }}>{p}</span>
            })}

        </div>
        {
            props.users.map(u => <div kay={u.id}  >
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id} >
                            <img alt="hi" src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto} />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed

                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowingProgress(true, u.id)
                                userAPI.unFollowApi(u.id).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unFollow(u.id)
                                    }
                                    props.toggleFollowingProgress(false, u.id)
                                })
                            }
                            } > unFollow </button>
                            :
                            <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowingProgress(true, u.id)
                                userAPI.followApi(u.id).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                    props.toggleFollowingProgress(false, u.id)
                                })
                            }} > Follow </button>
                        }

                    </div>
                </span>
                <span>
                    <span>
                        <div> {u.name} </div>
                        <div> {u.status} </div>
                    </span>
                    <span>
                        <div> {'u.location.country'} </div>
                        <div> {'u.location.city'} </div>
                    </span>
                </span>
            </div>)
        }
    </div>

};

export default UsersComponent;