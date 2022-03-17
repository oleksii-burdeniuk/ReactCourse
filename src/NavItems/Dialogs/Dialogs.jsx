import React from 'react';
import { Redirect } from "react-router-dom";
import s from './Dialogs.module.css';
import DialogItem from './DialogComponents/DialogItem';
import Massage from './DialogComponents/messageItem';
import { Field, reduxForm } from 'redux-form';


const DialogsForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
    <Field placeholder='new text' name='newText' component='textarea' />
    <button  >ADD</button>
  </form>
}

const ReduxDialogForm = reduxForm({ form: 'Dialogs' })(DialogsForm)
const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
  let messageElements = props.messages.map(m => <Massage massage={m.message} />);
  if (!props.isAuth) return <Redirect to='/login' />

  const onSubmit = (formData) => {
    props.addMessage(formData.newText)
    console.log(formData)
  }
  return (
    <div >
      <div className={s.dialogs}>
        <div> {dialogsElements} </div>
        <div> {messageElements} </div>
      </div>
      <ReduxDialogForm onSubmit={onSubmit} />
    </div>
  )
};
export default Dialogs;