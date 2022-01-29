import React from 'react';
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';
import DialogItem from './DialogComponents/DialogItem';
import Massage from './DialogComponents/messageItem';
import {addMessageActionCreator} from '../../state/dialogsPageReducer'
import {addUserActionCreator} from '../../state/dialogsPageReducer'



const Dialogs = (props) =>{

  let dialogsElements =  props.dialogsPage.dialogs.map( dialog => <DialogItem name = {dialog.name} id = {dialog.id}/> );  
  let messageElements =  props.dialogsPage.messages.map(m => <Massage massage = {m.message}/>);
  let DefaultValue = props.dialogsPage.newMessageText
  
  

  let addMessage = () => {
    props.dispatch( addUserActionCreator() );
  };
  let changeMessageData = (v) => {
    let text = v.target.value;
   let action = addMessageActionCreator(text)
   props.dispatch(action);
  }

  return(
    <div >
      <div className={s.dialogs}>
        <div> {dialogsElements} </div>
        <div>{messageElements} </div>
      </div>
      <div>
        <textarea onChange={changeMessageData} value = {DefaultValue}/>
        <button onClick={addMessage} >ADD</button>
      </div>
    </div>
  );
};
export default Dialogs;