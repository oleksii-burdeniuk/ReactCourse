import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { addMessageActionCreator } from '../../state/dialogsPageReducer'
import { addUserActionCreator } from '../../state/dialogsPageReducer'
import Dialogs from './Dialogs';



let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
    isAuth: state.auth.isAuth
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addUserActionCreator());
    },
    changeMessageData: (text) => {
      let action = addMessageActionCreator(text)
      dispatch(action);
    }
  }
}
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)
