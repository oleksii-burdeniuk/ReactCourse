import React from 'react';
import logo from '../assets/images/apple.png';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
const Header = (props) => {
  console.log(props)
  return (
    <header className={s.header}>
      <img alt='' className={s.logo} src={logo} />
      <div className={s.loginBlock}>
        {props.isAuth ? <div> {props.login}   <button onClick={props.logout} >log out</button> </div> :
          <NavLink to={'/login'}>login</NavLink>}

      </div>
    </header>
  );
};

export default Header;