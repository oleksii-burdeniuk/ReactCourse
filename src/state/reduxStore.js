import {combineReducers, createStore} from 'redux';
import profilePageReducer from './profilePageReducer';
import dialogsPageReducer from './dialogsPageReducer';
import sideBarReducer from './sideBarReducer';
import userPageReducer from './userPageReducer';

let reducers = combineReducers({
  profilePage : profilePageReducer,
  dialogsPage : dialogsPageReducer,
  sideBar : sideBarReducer, 
  usersPage : userPageReducer,
});

let store = createStore(reducers);

export default store;