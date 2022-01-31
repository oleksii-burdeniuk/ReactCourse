import React from 'react';
import {addMessageActionCreator} from '../../state/dialogsPageReducer'
import {addUserActionCreator} from '../../state/dialogsPageReducer'
import StoreContext from '../../storeContext';
import Dialogs from './Dialogs';



const DialogsContainer = () =>{

  

  return(
    <StoreContext.Consumer>
       {(store) =>{
        let addMessage = () => {
          store.dispatch( addUserActionCreator() );
        };
        let state = store.getState();
      
        let changeMessageData = (text) => {
         let action = addMessageActionCreator(text)
         store.dispatch(action);
        }
    
    return <Dialogs 
    dialogs = {state.dialogsPage.dialogs} 
    messages = {state.dialogsPage.messages} 
    newMessageText = {state.dialogsPage.newMessageText} 
    addMessage = {addMessage}  
    changeMessageData = {changeMessageData}  />
  }}
  </StoreContext.Consumer>
   )
};
export default DialogsContainer;