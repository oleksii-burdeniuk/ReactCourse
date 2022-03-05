import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from '../state/profilePageReducer';
import { withRouter } from 'react-router-dom';
import { userAPI } from '../api/api';



class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId)
    userAPI.getProfile(userId).then(response => {
      this.props.setUserProfile(response.data)
    })
  }

  render() {
    return (

      <Profile {...this.props} profile={this.props.profile} />

    )
  }
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
})
let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent);