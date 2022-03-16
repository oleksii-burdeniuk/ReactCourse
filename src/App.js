import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import HeaderContainer from './Header/HeaderContainer';
import LoginPage from './login/login';
import Nav from './Nav/Nav';
import DialogsContainer from './NavItems/Dialogs/DialogsContainer';
import Music from './NavItems/Music/Music';
import News from './NavItems/News/News';
import Settings from './NavItems/Settings/Settings';
import ProfileContainer from './Profile/ProfileContainer';
import UsersContainer from './Users/UsersContainer';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app_wrapper'>
        <HeaderContainer />
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
          <Route path='/login' render={() => <LoginPage />} />
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
