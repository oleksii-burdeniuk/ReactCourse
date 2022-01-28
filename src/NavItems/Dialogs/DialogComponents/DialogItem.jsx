import react from "react";
import { NavLink } from "react-router-dom";
import s from './DialogItem.css';

const DialogItem = (props) => {
  let path  = '/dialogs/';
  return(
    <div className={s.dialog}> 
    <NavLink to={path + props.id  }> 
      {props.name}
    </NavLink>
    </div>
  );
};

export default DialogItem;