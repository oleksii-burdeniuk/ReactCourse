import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Nav.module.css'

const Nav = () =>{
  return(
    <nav className={s.nav}>
      <div> 
        <div> <NavLink className = { navData => navData.isActive ? s.active : s.items }  to='/profile'>Profile</NavLink> </div>
        <div> <NavLink className = { navData => navData.isActive ? s.active : s.items } to='/dialogs'> Massages</NavLink> </div>
        <div> <NavLink className = { navData => navData.isActive ? s.active : s.items } to='/news'>News</NavLink> </div>
        <div> <NavLink className = { navData => navData.isActive ? s.active : s.items } to='/music'> Music</NavLink> </div>
        <div> <NavLink className = { navData => navData.isActive ? s.active : s.items } to='/settings'>Settings</NavLink> </div>  
        </div>
      </nav>
     
  );
};
export default Nav;