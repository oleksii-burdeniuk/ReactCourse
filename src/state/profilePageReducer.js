import { profileAPI, userAPI } from "../api/api";
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';


let initialState = {
  posts: [
    { id: 1, message: 'HI!' },
    { id: 2, message: 'what is up?!' },
    { id: 3, message: 'I am hear!' },
    { id: 4, message: 'where are you?!' },
    { id: 5, message: 'call me back!!' },
    { id: 6, message: 'white!' },
  ],
  newPostsText: 'hello1',
  profile: null,
  status: '',
};

const profilePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let text = action.newText
      let newPost = { message: text }
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter(p => p.id != action.id)
      };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile }
    }
    default: return state
  }
};

export const addPostActionCreator = (formData) => {
  return {
    type: 'ADD-POST',
    newText: formData
  }
}
export const setUserProfile = (profile) => {
  return {
    type: 'SET_USER_PROFILE',
    profile
  }
}
export const setStatus = (status) => {
  return {
    type: 'SET_STATUS',
    status
  }
}
export const deletePost = (postId) => {
  return {
    type: 'DELETE_POST',
    id: postId
  }
}
export const getUserProfile = (userId) => async (dispatch) => {
  let response = await userAPI.getProfile(userId)
  dispatch(setUserProfile(response.data))
}
export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId)
  dispatch(setStatus(response.data))
}
export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status)
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status))
  }
}
export default profilePageReducer;