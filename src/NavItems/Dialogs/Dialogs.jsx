import React from 'react';
import { NavLink, Redirect } from "react-router-dom";
import s from './Dialogs.module.css';
import DialogItem from './DialogComponents/DialogItem';
import Massage from './DialogComponents/messageItem';




const Dialogs = (props) => {

  let dialogsElements = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
  let messageElements = props.messages.map(m => <Massage massage={m.message} />);
  let DefaultValue = props.newMessageText;



  let addMessage = () => {
    props.addMessage();
  };
  let changeMessageData = (v) => {
    let text = v.target.value;
    props.changeMessageData(text);
  }
  if (!props.isAuth) return <Redirect to='/login' />
  return (
    <div >
      <div className={s.dialogs}>
        <div> {dialogsElements} </div>
        <div> {messageElements} </div>
      </div>
      <div>
        <textarea onChange={changeMessageData} value={DefaultValue} />
        <button onClick={addMessage} >ADD</button>
      </div>
    </div>
  )
};
export default Dialogs;