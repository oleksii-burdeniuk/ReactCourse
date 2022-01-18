import React from 'react';
import Posts from '../MyPosts/MyPosts';
import mod from './Profile.module.css'

const Profile = () =>{
  return(
    <div className={mod.content}>
       <div>
         <img className={mod.content_img} src='https://c8.alamy.com/comp/2B21KJP/colorful-evening-sunset-in-small-town-of-chiusi-tuscany-italy-with-houses-roof-rooftops-on-mountain-countryside-rolling-hills-landscape-and-picturesq-2B21KJP.jpg'/>
         </div>
       <div>Ava + description</div>
       <div> my post
         <div>New post</div>
         <div> 
          <Posts/>
             </div>
       </div>
      </div>
  );
};

export default Profile;