const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initialState = {
  posts : [
    {id:1, message: 'HI!'},
    {id:2, message: 'what is up?!'},
    {id:3, message: 'I am hear!'},
    {id:4, message: 'where are you?!'},
    {id:5, message: 'call me back!!'},
    {id:6, message: 'white!'}, 
  ],
  newPostsText: 'hello1'
};

const profilePageReducer = (state = initialState, action) => {
  let stateCopy
  switch(action.type){
  case ADD_POST: {
    let text = state.newPostsText
    let newPost = { message: text}
    return stateCopy = {
      ...state,
      posts: [...state.posts, newPost],
      newPostsText: '',
      };
    }

  case  UPDATE_NEW_POST_TEXT:{
      return stateCopy = {
        ...state,
        newPostsText: action.newText,
      };  
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
export default profilePageReducer;