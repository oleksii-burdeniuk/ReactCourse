import React from "react";
import { Field } from "redux-form";

import s from './FormsControls.module.css';


const FormControl = ({ input, meta: { touched, error }, children, ...props }) => {
    const hasError = touched && error
    return (
        <div className={`${s.formControl} ${hasError ? s.error : undefined}`}  >
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>
            }        </div >
    )
}



export const Textarea = (props) => {
    const { input, meta, ...restProps } = props
    return (<FormControl {...props}> <textarea {...input} {...restProps} /> </FormControl>
    )
}

export const Input = (props) => {
    const { input, meta, ...restProps } = props
    return (<FormControl {...props}> <input {...input} {...restProps} /> </FormControl>
    )
}
export const createField = (placeholder, name, type, component, validators, props = {}, text = '') => (<div>
    <Field placeholder={placeholder} name={name} type={type} component={component}
        validate={validators}
        {...props}
    />{text}
</div>)