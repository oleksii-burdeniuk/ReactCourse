import {combineReducers, createStore} from 'redux';
import profilePageReducer from './profilePageReducer';
import dialogsPageReducer from './dialogsPageReducer';
import sideBarReducer from './sideBarReducer';

let reducers = combineReducers({
  profilePage : profilePageReducer,
  dialogsPage : dialogsPageReducer,
  sideBar : sideBarReducer, 
});

let store = createStore(reducers);

export default store;