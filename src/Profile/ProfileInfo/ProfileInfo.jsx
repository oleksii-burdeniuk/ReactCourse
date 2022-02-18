import React from "react";
import Preloader from "../../common/preloader/Preloader";
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (<div>
    <div>
      <img alt="" className={s.content_img} src='https://c8.alamy.com/comp/2B21KJP/colorful-evening-sunset-in-small-town-of-chiusi-tuscany-italy-with-houses-roof-rooftops-on-mountain-countryside-rolling-hills-landscape-and-picturesq-2B21KJP.jpg' />
    </div>
    <img src={props.profile.photos.large} alt="" />
    <div>Ava + description</div>
  </div>
  )
}
export default ProfileInfo;