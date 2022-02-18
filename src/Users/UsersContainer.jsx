import React from "react";
import { connect } from "react-redux";
import { follow, setCurrentPage, setUsers, setTotalUsersCount, toggleIsFetching } from "../state/userPageReducer";
import { unFollow } from "../state/userPageReducer";
import UsersComponent from "./UsersComponent";
import * as axios from 'axios';
import Preloader from "../common/preloader/Preloader";


class Users extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items)
      this.props.toggleIsFetching(false)
      this.props.setTotalUsersCount(response.data.totalCount)
    })
  }
  onPageChanged = (pageNumber) => {
    this.props.toggleIsFetching(true)
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items)
      this.props.toggleIsFetching(false)
    })
  }
  render() {
    return <>
      {this.props.isFetching ? <Preloader /> : null}
      <UsersComponent totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        unFollow={this.props.unFollow}
        follow={this.props.follow} />
    </>
  }
}
let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  }
};
// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId));
//     },
//     unFollow: (userId) => {
//       dispatch(unFollowAC(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber))
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setUsersTotalCountAC(totalCount))
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingAC(isFetching))
//     }

//   }
// }

let UsersContainer = connect(mapStateToProps, {
  follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching
})(Users);
export default UsersContainer;