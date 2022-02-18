const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

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
};

const profilePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let text = state.newPostsText
      let newPost = { message: text }
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostsText: '',
      };
    }

    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostsText: action.newText,
      };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile }
    }
    default: return state
  }
};

export const addPostActionCreator = () => {
  return {
    type: 'ADD-POST',
  }
}
export const UpdateNewPostTextActionCreator = (text) => {
  return {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: text,
  }
}
export const setUserProfile = (profile) => {
  return {
    type: 'SET_USER_PROFILE',
    profile
  }
}
export default profilePageReducer;