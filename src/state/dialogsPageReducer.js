const  UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const  UPDATE_NEW_DIALOG = 'UPDATE-NEW-DIALOG';

const dialogsPageReducer = (state, action) => {
  switch(action.type){
    case  UPDATE_NEW_DIALOG:
     let newUser = {id: 7, name: 'Ira', type: 'UPDATE-NEW-DIALOG',}
     let text = state.newMessageText
     let newMessage = {message: text }
     state.messages.push(newMessage)
     state.dialogs.push(newUser)
     state.newMessageText = ''
      return state;
  
    case  UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newMessage
      return state;
    }
  return state;
};

export const addMessageActionCreator = (text) =>{
  return {
    newMessage: text ,
    type: 'UPDATE-NEW-MESSAGE-TEXT' , 
  }
};
export const addUserActionCreator = () =>{
  return {
     type: 'UPDATE-NEW-DIALOG'
  }
};
export default dialogsPageReducer;
