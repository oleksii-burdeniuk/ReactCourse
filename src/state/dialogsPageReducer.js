const UPDATE_NEW_DIALOG = 'UPDATE-NEW-DIALOG';

let initialState = {
  newMessageText: 'hellllo',
  dialogs: [
    { id: 1, name: 'Mykola' },
    { id: 2, name: 'Chrystya' },
    { id: 3, name: 'Dima' },
    { id: 4, name: 'Bogdan' },
  ],

  messages: [
    { message: 'Hello world' },
    { message: 'I am studying react ' },
    { message: 'I know how to use react' },
    { message: 'Do yo know how to use react?' },
  ]
};

const dialogsPageReducer = (state = initialState, action) => {
  let stateCopy;
  switch (action.type) {
    case UPDATE_NEW_DIALOG: {
      let newUser = { id: 7, name: 'Ira', type: 'UPDATE-NEW-DIALOG', }
      let text = action.newMessageText;
      let newMessage = { message: text };
      return stateCopy = {
        ...state,
        dialogs: [...state.dialogs, newUser],
        messages: [...state.messages, newMessage],
      };
    }
    default: return state;
  }
};
export const addUserActionCreator = (text) => {
  return {
    type: 'UPDATE-NEW-DIALOG',
    newMessageText: text,
  }
};
export default dialogsPageReducer;
