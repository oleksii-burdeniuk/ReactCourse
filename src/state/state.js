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
    
    newPostsText: 'itKamasutra.com'
  },
  
  dialogsPage:{
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
  if (action.type === 'ADD-POST'){
    let text = this._state.profilePage.newPostsText
  let newPost = { message: text}

  this._state.profilePage.posts.push(newPost);
  this._state.profilePage.newPostsText = ''
  this._callSubscriber(this._state)
  }
  else if (action.type === 'UPDATE-NEW-POST-TEXT') {
    this._state.profilePage.newPostsText = action.newText;
    this._callSubscriber(this._state)
  }
},

}
export default store;