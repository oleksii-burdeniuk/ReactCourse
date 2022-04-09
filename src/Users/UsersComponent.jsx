import React from "react";
import Paginator from "../common/paginators/pajinator";
import User from "./User";

let UsersComponent = ({ currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props }) => {
    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount} pageSize={pageSize} props />
        {
            users.map(u => <User user={u} kay={u.id} followingInProgress={props.followingInProgress} unFollow={props.unFollow} follow={props.follow} />
            )
        }
    </div >

};

export default UsersComponent;