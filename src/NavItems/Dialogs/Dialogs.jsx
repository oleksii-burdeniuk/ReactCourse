import react from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';


let path  = '/dialogs/';

const DialogItem = (props) => {
  return(
    <div className={s.dialog}> 
    <NavLink to={path + props.id  }> {props.name}
    </NavLink>
    </div>
  );
};

const Massage = (props) => {
  return(
    <div className={s.massage}>{props.massage}</div>
  );
};

let dialogsData = [
  {id: 1, name: 'Mykola' },
  {id: 2, name: 'Chrystya' },
  {id: 3, name: 'Dima' },
  {id:4 , name: 'Bogdan' },
  {id: 5, name: 'Ruslan' },
  {id: 6, name: 'Nastya' },
];
let messageItem =[
{message: 'HI!'},
{message: 'what is up?!'},
{message: 'I am hear!'},
{message: 'where are you?!'},
{message: 'call me back!!'},
{message: 'white!'},
];


let dialogsElements = dialogsData.map(dialog => <DialogItem name = {dialog.name} id = {dialog.id}/>);

let messageElement = messageItem.map(message => <Massage massage = {message.message}/>)

const Dialogs = (props) =>{
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