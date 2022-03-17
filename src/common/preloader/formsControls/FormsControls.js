import React from "react";
import s from './FormsControls.module.css';


export const Textarea = ({ input, meta, ...props }) => {
    return (
        <div className={s.formControl + '' + s.error} >
            <div>
                <textarea {...props} {...input} />
            </div>
            {meta.error && <span>Some Error</span>
            }        </div >
    )
}