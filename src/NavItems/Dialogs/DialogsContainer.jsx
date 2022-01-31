import React from 'react';
import {addMessageActionCreator} from '../../state/dialogsPageReducer'
import {addUserActionCreator} from '../../state/dialogsPageReducer'
import Dialogs from './Dialogs';



const DialogsContainer = (props) =>{

  let addMessage = () => {
    props.dispatch( addUserActionCreator() );
  };

  let changeMessageData = (text) => {
   let action = addMessageActionCreator(text)
   props.dispatch(action);
  }

  return(
    <Dialogs 
    dialogs = {props.store.dialogsPage.dialogs} 
    messages = {props.store.dialogsPage.messages} 
    newMessageText = {props.store.dialogsPage.newMessageText} 
    addMessage = {addMessage}  
    changeMessageData = {changeMessageData}  />
  );
};
export default DialogsContainer;