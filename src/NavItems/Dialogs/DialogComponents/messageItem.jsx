import react from "react";
import s from './messageItem.css';

const Massage = (props) => {
  let path  = '/dialogs/';
  return(
    <div className={s.massage}>
       {props.massage}
       </div>
  );
};

export default Massage;