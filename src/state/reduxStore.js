import { applyMiddleware, combineReducers, createStore } from 'redux';
import profilePageReducer from './profilePageReducer';
import dialogsPageReducer from './dialogsPageReducer';
import sideBarReducer from './sideBarReducer';
import userPageReducer from './userPageReducer';
import authReducer from './AuthReducer';
import thunkMiddleWare from 'redux-thunk';

let reducers = combineReducers({
  profilePage: profilePageReducer,
  dialogsPage: dialogsPageReducer,
  sideBar: sideBarReducer,
  usersPage: userPageReducer,
  auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

export default store;