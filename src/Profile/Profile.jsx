import React from 'react';
import Posts from './MyPosts/MyPosts';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';



  
const Profile = (props) =>{
  return(
    <div className={s.content}>
       <ProfileInfo/>
        <Posts messages = {props.profilePage.messages} 
        posts = {props.profilePage.posts}  
        newPostsText = {props.profilePage.newPostsText} 
        dispatch = {props.dispatch} 
        />
          
      
      </div>
  );
};

export default Profile;