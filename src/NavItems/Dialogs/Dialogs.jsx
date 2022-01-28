import React from 'react';
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';
import DialogItem from './DialogComponents/DialogItem';
import Massage from './DialogComponents/messageItem';
import {addMessageActionCreator} from '../../state/state'
import {addUserActionCreator} from '../../state/state'
// let path  = '/dialogs/';

// const DialogItem = (props) => {
//   return(
//     <div className={s.dialog}> 
//     <NavLink to={path + props.id  }> 
//       {props.name}
//     </NavLink>
//     </div>
//   );
// };
// const Massage = (props) => {
//   return(
//     <div className={s.massage}>
//        {props.massage}
//        </div>
//   );
// };



const Dialogs = (props) =>{

  let dialogsElements =  props.dialogsPage.dialogs.map( dialog => <DialogItem name = {dialog.name} id = {dialog.id}/> );  
  let messageElements =  props.dialogsPage.messages.map(m => <Massage massage = {m.message}/>);
  let textArea = React.createRef();
  document.textArea = textArea;
  let DefaultValue = props.dialogsPage.newMessageText
  
  

  let addMessage = () => {
    props.dispatch( addUserActionCreator() );
  };
  let changeMessageData = () => {
    let text = textArea.current?.value
   let action = addMessageActionCreator(text)
   props.dispatch(action);
  }

  return(
    <div className="dialogs">
      <div>
        <div> {dialogsElements} </div>
        <div>{messageElements} </div>
      </div>
      <div>
        <textarea onChange={changeMessageData} value = '' ref={textArea}/>
        <button onClick={addMessage} >ADD</button>
      </div>
    </div>
  );
};
export default Dialogs;