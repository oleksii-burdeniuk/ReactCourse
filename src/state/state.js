const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const  UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const  UPDATE_NEW_DIALOG = 'UPDATE-NEW-DIALOG';

let store = {
_state : {
  profilePage:{
  posts : [
    {message: 'HI!'},
    {message: 'what is up?!'},
    {message: 'I am hear!'},
    {message: 'where are you?!'},
    {message: 'call me back!!'},
    {message: 'white!'},
    ],
    
    newPostsText: 'hello1'
  },
  
  dialogsPage:{
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
    }, 
},
_callSubscriber() {
  console.log('Hi!');
},

getState () {
  return this._state;
},
subscribe(observer)  {
  this._callSubscriber = observer;
},
dispatch (action){
  if (action.type === ADD_POST ){
  let text = this._state.profilePage.newPostsText
  let newPost = { message: text}
  this._state.profilePage.posts.push(newPost);
  this._state.profilePage.newPostsText = ''
  this._callSubscriber(this._state)
  }
  else if (action.type === UPDATE_NEW_POST_TEXT ) {
    this._state.profilePage.newPostsText = action.newText;
    this._callSubscriber(this._state)
  }
  else if (action.type === UPDATE_NEW_DIALOG ) {
   let newUser = {id: 7, name: 'Ira', type: 'UPDATE-NEW-DIALOG',}
   let text = this._state.dialogsPage.newMessageText
   let newMessage = {message: text }
    this._state.dialogsPage.messages.push(newMessage)
    this._state.dialogsPage.dialogs.push(newUser)
    this._state.dialogsPage.newPostsText = ''
    this._callSubscriber(this._state)
  }
  else if (action.type ===  UPDATE_NEW_MESSAGE_TEXT) {
   let text = this._state.dialogsPage.newMessageText
   text = action.newMessage ;
    this._callSubscriber(this._state)
  }

},
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

export default store;