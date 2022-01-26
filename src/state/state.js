import {rerenderEntireTree} from '../render'
let state = {
  profilePage:{
  posts : [
    {message: 'HI!'},
    {message: 'what is up?!'},
    {message: 'I am hear!'},
    {message: 'where are you?!'},
    {message: 'call me back!!'},
    {message: 'white!'},
    ]
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
    }
};

export let addPost = ( postMessage ) => {
  let newPost = {
    message: postMessage
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state)
}
export default state;