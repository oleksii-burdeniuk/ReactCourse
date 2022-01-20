import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Nav.module.css'

const Nav = () =>{
  return(
    <nav className={s.nav}>
      <div> 
        <div> <NavLink className = { navData => navData.isActive ? s.active : s.item }  to='/profile'>Profile</NavLink> </div>
        <div> <NavLink className = { navData => navData.isActive ? s.active : s.item } to='/dialogs'> Massages</NavLink> </div>
        <div> <NavLink className = { navData => navData.isActive ? s.active : s.item } to='/news'>News</NavLink> </div>
        <div> <NavLink className = { navData => navData.isActive ? s.active : s.item } to='/music'> Music</NavLink> </div>
        <div> <NavLink className = { navData => navData.isActive ? s.active : s.item } to='/settings'>Settings</NavLink> </div>  
        </div>
      </nav>
     
  );
};
export default Nav;