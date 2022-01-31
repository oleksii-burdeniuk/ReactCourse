const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initialState = {
  posts : [
    {message: 'HI!'},
    {message: 'what is up?!'},
    {message: 'I am hear!'},
    {message: 'where are you?!'},
    {message: 'call me back!!'},
    {message: 'white!'}, 
  ],
  newPostsText: 'hello1'
};

const profilePageReducer = (state = initialState, action) => {
  switch(action.type){
  case ADD_POST: 
    let text = state.newPostsText
    let newPost = { message: text}
    state.posts.push(newPost);
    state.newPostsText = ''
    return state;
    
  case  UPDATE_NEW_POST_TEXT:
      state.newPostsText = action.newText;
      return state;
      default: return state;
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