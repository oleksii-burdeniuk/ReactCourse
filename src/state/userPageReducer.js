import { userAPI } from "../api/api";
import { updateObjectInArray } from "./utils/objectsHelpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';
let initialState = {
  users: [],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const userPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', { followed: true })
      }
    }

    case UNFOLLOW: {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', { followed: false })
      }
    }
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage, };
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count, };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching, };
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      };
    }


    default: return state
  }
};

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unFollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage: currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });

export const getUsers = (currentPage, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true))
    let response = await userAPI.getUsers(currentPage, pageSize)
    dispatch(setUsers(response.items))
    dispatch(toggleIsFetching(false))
    dispatch(setTotalUsersCount(response.totalCount))
    dispatch(setCurrentPage(currentPage))
  }
}
const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator,) => {
  dispatch(toggleFollowingProgress(true, id))
  let response = await apiMethod(id)
  if (response.data.resultCode === 0) {
    dispatch(actionCreator(id))
  }
  dispatch(toggleFollowingProgress(false, id))
}


export const unFollow = (id) => {
  let apiMethod = userAPI.unFollowApi.bind(userAPI)
  let actionCreator = unFollowSuccess
  return async (dispatch) => {
    followUnfollowFlow(dispatch, id, apiMethod, actionCreator,)
  }
}
export const follow = (id) => {
  let apiMethod = userAPI.followApi.bind(userAPI)
  let actionCreator = followSuccess
  return async (dispatch) => {
    followUnfollowFlow(dispatch, id, apiMethod, actionCreator,)
  }
}
export default userPageReducer;