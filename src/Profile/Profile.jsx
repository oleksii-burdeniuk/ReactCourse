import React from 'react';
import Posts from './MyPosts/MyPosts';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () =>{
  return(
    <div className={s.content}>
       <ProfileInfo/>
        <Posts/>
          
      
      </div>
  );
};

export default Profile;