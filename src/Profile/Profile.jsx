import React from 'react';
import Posts from './MyPosts/MyPosts';
import PostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';



  
const Profile = (props) =>{
  return(
    <div className={s.content}>
       <ProfileInfo/>
        <PostsContainer 
        store = {props.store}
        dispatch = {props.dispatch} 
        />
          
      
      </div>
  );
};

export default Profile;