import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import Profile from './Profile/Profile';
import Dialogs from './NavItems/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Music from './NavItems/Music/Music';
import News from './NavItems/News/News';
import Settings from './NavItems/Settings/Settings';


const App = () => {
  return (
    <BrowserRouter>
    <div className='app_wrapper'>
        <Header/>
        <Nav/>
        <div className='content'>
          <Routes>
            <Route path = '/dialogs' element = {<Dialogs/>} />
            <Route path = '/profile' element = {<Profile/>} />
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
