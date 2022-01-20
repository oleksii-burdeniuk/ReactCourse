import react from "react";
import s from './ProfileInfo.module.css'

 const ProfileInfo = () =>{
   return(<div>
    <div>
    <img className={s.content_img} src='https://c8.alamy.com/comp/2B21KJP/colorful-evening-sunset-in-small-town-of-chiusi-tuscany-italy-with-houses-roof-rooftops-on-mountain-countryside-rolling-hills-landscape-and-picturesq-2B21KJP.jpg'/>
    </div>
  <div>Ava + description</div>
  </div>
   )
 }
 export default ProfileInfo;