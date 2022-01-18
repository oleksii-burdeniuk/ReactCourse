import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import Profile from './Profile/Profile';

const App = () => {
  return (
    <div className='app_wrapper'>
        <Header/>
        <Nav/>
        <Profile/>
    </div>
  );
}
export default App;
