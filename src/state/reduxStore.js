import { applyMiddleware, combineReducers, createStore } from 'redux';
import profilePageReducer from './profilePageReducer';
import dialogsPageReducer from './dialogsPageReducer';
import sideBarReducer from './sideBarReducer';
import userPageReducer from './userPageReducer';
import authReducer from './AuthReducer';
import thunkMiddleWare from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
  profilePage: profilePageReducer,
  dialogsPage: dialogsPageReducer,
  sideBar: sideBarReducer,
  usersPage: userPageReducer,
  auth: authReducer,
  form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

export default store;