import React from "react";
import s from './users.module.css'
import userPhoto from '../assets/images/pngwing.png'
import { NavLink } from 'react-router-dom'

let User = ({ kay, user, followingInProgress, unFollow, follow }) => {
    return <div kay={kay}>
        <span>
            <div>
                <NavLink to={'/profile/' + user.id} >
                    <img alt="hi" src={user.photos.small != null ? user.photos.small : userPhoto} className={s.userPhoto} />
                </NavLink>
            </div>
            <div>
                {user.followed

                    ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        unFollow(user.id)
                    }
                    } > unFollow </button>
                    :
                    <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        follow(user.id)
                    }} > Follow </button>
                }

            </div>
        </span>
        <span>
            <span>
                <div> {user.name} </div>
                <div> {user.status} </div>
            </span>
            <span>
                <div> {'user.location.country'} </div>
                <div> {'user.location.city'} </div>
            </span>
        </span>
    </div>
};

export default User;