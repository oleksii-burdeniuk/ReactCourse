import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { reduxForm } from "redux-form";
import { createField, Input } from "../common/preloader/formsControls/FormsControls";
import { login, logout } from "../state/AuthReducer";
import { maxLength, required } from "../utils/validators/validators";
import s from '../common/preloader/formsControls/FormsControls.module.css'
let maxLength25 = maxLength(25)
let maxLength35 = maxLength(35)

let LoginForm = ({ handleSubmit, error }, ...props) => {
    return (
        <form onSubmit={handleSubmit} >
            {createField('Email', 'email', 'email', Input, [required, maxLength35])}
            {createField('Password', 'password', 'password', Input, [required, maxLength25])}
            {createField(null, 'rememberMe', 'checkbox', Input, [], 'remember Me')}
            {error && <div className={s.formSummaryError}>
                {error}
            </div>}
            <div> <button>LogIn</button></div>
        </form>
    )
}
const ReduxLoginForm = reduxForm({ form: 'login' })(LoginForm)

const Login = ({ login, isAuth }, ...props) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe)
        console.log(formData)
    }
    if (isAuth) {
        return <Redirect to={'/profile'} />
    }
    return <div>
        <h1>Login</h1>
        <ReduxLoginForm onSubmit={onSubmit} />
    </div>
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { login, logout })(Login);