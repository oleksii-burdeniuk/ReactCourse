const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

const profilePageReducer = (state, action) => {
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
    }
    
  return state;
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