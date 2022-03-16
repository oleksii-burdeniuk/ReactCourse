import React from "react";

let LoginForm = (props) => {
    return (
        <form action="">
            <div>
                <input placeholder={'Login'} />
            </div>
            <div>
                <input placeholder={'Password'} />
            </div>
            <div>
                <input type={'checkbox'} /> remember me
            </div>
            <div> <button>LogIn</button></div>
        </form>
    )
}
const Login = (props) => {
    return <div>
        <h1>Login</h1>
        <LoginForm />
    </div>
}

export default Login;