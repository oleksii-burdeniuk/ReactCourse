import React from "react";
import { connect } from "react-redux";
import { followSuccess, setCurrentPage, toggleFollowingProgress, getUsers, unFollow, follow } from "../state/userPageReducer";
import { unFollowSuccess } from "../state/userPageReducer";
import UsersComponent from "./UsersComponent";
import Preloader from "../common/preloader/Preloader";


class Users extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }
  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize)

  }
  render() {
    return <>
      {this.props.isFetching ? <Preloader /> : null}
      <UsersComponent totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        followingInProgress={this.props.followingInProgress}
        getUsers={this.props.getUsers}
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
    followingInProgress: state.usersPage.followingInProgress
  }
};

let UsersContainer = connect(mapStateToProps, {
  followSuccess, unFollowSuccess,
  setCurrentPage, unFollow, follow,
  toggleFollowingProgress, getUsers,
})(Users);
export default UsersContainer;