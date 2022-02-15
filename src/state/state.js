import profilePageReducer from './profilePageReducer';
import dialogsPageReducer from './dialogsPageReducer';
import sideBarReducer from './sideBarReducer';

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const UPDATE_NEW_DIALOG = 'UPDATE-NEW-DIALOG';

let store = {
  _state: {
    profilePage: {
      posts: [
        { message: 'HI!' },
        { message: 'what is up?!' },
        { message: 'I am hear!' },
        { message: 'where are you?!' },
        { message: 'call me back!!' },
        { message: 'white!' },
      ],

      newPostsText: 'hello1'
    },

    dialogsPage: {
      newMessageText: 'hellllo',
      dialogs: [
        { id: 1, name: 'Mykola' },
        { id: 2, name: 'Chrystya' },
        { id: 3, name: 'Dima' },
        { id: 4, name: 'Bogdan' },
        { id: 5, name: 'Ruslan' },
        { id: 6, name: 'Nastya' },
      ],

      messages: [
        { message: 'Hello world' },
        { message: 'I am studying react ' },
        { message: 'I know how to use react' },
        { message: 'Do yo know how to use react?' },
      ]
    },
    sideBar: {},
  },
  _callSubscriber() {
    console.log('Hi!');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {

    this._state.profilePage = profilePageReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);
    this._state.sideBar = sideBarReducer(this._state.sideBar, action);
    this._callSubscriber(this._state)
  }
};

export default store;