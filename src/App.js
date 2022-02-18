import React from 'react';
import './App.css';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import { BrowserRouter, Route, } from 'react-router-dom';
import Music from './NavItems/Music/Music';
import News from './NavItems/News/News';
import Settings from './NavItems/Settings/Settings';
import DialogsContainer from './NavItems/Dialogs/DialogsContainer';
import UsersContainer from './Users/UsersContainer';
import ProfileContainer from './Profile/ProfileContainer';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app_wrapper'>
        <Header />
        <Nav />
        <div className='content'>
          <Route path='/dialogs'
            render={() => <DialogsContainer />} />

          <Route path={`/profile/:userId?`}
            render={() => <ProfileContainer />} />
          <Route path='/users'
            render={() => <UsersContainer />} />

          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
