const  UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const  UPDATE_NEW_DIALOG = 'UPDATE-NEW-DIALOG';

let initialState = {
  newMessageText: 'hellllo',
  dialogs : [
    {id: 1, name: 'Mykola' },
    {id: 2, name: 'Chrystya' },
    {id: 3, name: 'Dima' },
    {id:4 , name: 'Bogdan' },
    {id: 5, name: 'Ruslan' },
    {id: 6, name: 'Nastya' },
  ],
   
     messages : [
      {message: 'Hello world' },
      {message: 'I am studying react ' },
      {message: 'I know how to use react' },
      {message: 'Do yo know how to use react?' },
      ]
    };

const dialogsPageReducer = (state = initialState, action) => {
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
      default: return state;
    }
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