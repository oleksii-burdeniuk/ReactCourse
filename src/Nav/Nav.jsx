import React from 'react';
import mod from './Nav.module.css'

const Nav = () =>{
  return(
    <nav className={mod.nav}>
        <div> <a>Profile</a> </div>
        <div> <a>Massages</a> </div>
        <div> <a>News</a> </div>
        <div> <a>Music</a> </div>
        <div> <a>Settings</a> </div>
        
      </nav>
  );
};
export default Nav;