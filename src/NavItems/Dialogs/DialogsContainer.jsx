import React from 'react';
import { connect } from 'react-redux';
import {addMessageActionCreator} from '../../state/dialogsPageReducer'
import {addUserActionCreator} from '../../state/dialogsPageReducer'
import Dialogs from './Dialogs';



let mapStateToProps = (state) =>{
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText
  }
}
let mapDispatchToProps = (dispatch) =>{
  return{
    addMessage: () =>{
      dispatch( addUserActionCreator() );
    },
    changeMessageData: (text) =>{
      let action = addMessageActionCreator(text)
         dispatch(action);
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;