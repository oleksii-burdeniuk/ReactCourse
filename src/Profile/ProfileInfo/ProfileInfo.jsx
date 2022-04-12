import React from "react";
import Preloader from "../../common/preloader/Preloader";
import s from './ProfileInfo.module.css'
import ProfileStatus from "./profileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (<div>
    <div>
      {/* <img alt="" className={s.content_img} src={props.profile.photos.small} /> */}
    </div>
    <img src={props.profile.photos.large} alt="" />
    <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
    <div>about Me: {props.profile.aboutMe}</div>
    <div>Full Name: {props.profile.fullName}</div>
    <div>Job Description: {props.profile.lookingForAJobDescription}</div>
  </div>

  )
}
export default ProfileInfo;