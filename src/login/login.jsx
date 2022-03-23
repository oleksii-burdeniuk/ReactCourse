import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/preloader/formsControls/FormsControls";
import { login, logout } from "../state/AuthReducer";
import { maxLength, required } from "../utils/validators/validators";
import s from '../common/preloader/formsControls/FormsControls.module.css'
let maxLength25 = maxLength(25)
let maxLength35 = maxLength(35)

let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field placeholder={'Email'} name={'email'} type='email' component={Input}
                    validate={[required, maxLength35]} />
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} type='password' component={Input}
                    validate={[required, maxLength25]} />
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={Input}
                    validate={[]} /> remember me
            </div>
            {props.error && <div className={s.formSummaryError}>
                {props.error}
            </div>}
            <div> <button>LogIn</button></div>
        </form>
    )
}
const ReduxLoginForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
        console.log(formData)
    }
    if (props.isAuth) {
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