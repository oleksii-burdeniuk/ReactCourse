import react from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';

let path  = '/dialogs/';

const DialogItem = (props) => {
  return(
    <div className={s.dialog}> 
    <NavLink to={path + props.id  }> 
      {props.name}
    </NavLink>
    </div>
  );
};
const Massage = (props) => {
  return(
    <div className={s.massage}>
       {props.massage}
       </div>
  );
};

const Dialogs = (props) =>{
      let dialogsElements =  props.dialogs.map( dialog => <DialogItem name = {dialog.name} id = {dialog.id}/> );  
      let messageElement =  props.posts.map(m => <Massage massage = {m.message}/>);
  return(
  <div className={s.dialogs}>
       <div className={s.dialogs_items}>
     {dialogsElements}
      </div>
      <div className={s.messages}>
        {messageElement}
      </div>
  </div>
  );
};
export default Dialogs;