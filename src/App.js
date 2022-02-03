import React from 'react';
import './App.css';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import Profile from './Profile/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Music from './NavItems/Music/Music';
import News from './NavItems/News/News';
import Settings from './NavItems/Settings/Settings';
import DialogsContainer from './NavItems/Dialogs/DialogsContainer';
import UsersContainer from './Users/UsersContainer';




const App = (props) => {
  return (
    <BrowserRouter>
    <div className='app_wrapper'>
        <Header/>
        <Nav/>
        <div className='content'>
          <Routes>
          <Route path = '/dialogs' 
                  element = {<DialogsContainer/>} />
            
            <Route path = '/profile' 
                  element = {<Profile/> } />
                  <Route path = '/users' 
                  element = {<UsersContainer />  } />
            
            <Route path = '/news' element = {<News/>} />
            <Route path = '/music' element = {<Music/>} />
            <Route path = '/settings' element = {<Settings/>} />
          </Routes>
        </div>
    </div>
    </BrowserRouter>
  );
}
export default App;
