import React from 'react';
import PostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';




const Profile = (props) => {
  return (
    <div className={s.content} >

      <div className={s.content}>
        <ProfileInfo profile={props.profile} />
        <PostsContainer />
      </div>
    </div>
  );
};

export default Profile;