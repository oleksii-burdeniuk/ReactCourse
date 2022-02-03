import React from "react";
import { connect } from "react-redux";
import { followAC, setUsersAC } from "../state/userPageReducer";
import { unFollowAC } from "../state/userPageReducer";
import Users from "./Users";

let mapStateToProps = (state) => {
  return{
    users: state.usersPage.users
  }
};
let mapDispatchToProps = (dispatch) => {
  return{
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unFollow: (userId) => {
      dispatch(unFollowAC(userId));
    },
    setUsers: (users) => {
      debugger
      dispatch(setUsersAC (users));
    }
  }
}

 let UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users);
 export default UsersContainer;