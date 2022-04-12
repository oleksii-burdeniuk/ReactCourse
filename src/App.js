import React from 'react';
import { connect, Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { compose } from 'redux';
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
import { initializeApp } from './state/appReducer';
import Preloader from './common/preloader/Preloader';
import store from './state/reduxStore';


class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
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
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

const AppContainer = compose(
  connect(mapStateToProps, { initializeApp }))
  (App);

const SamuraiJsApp = (props) => {
  return <React.StrictMode>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </React.StrictMode>
}
export default SamuraiJsApp