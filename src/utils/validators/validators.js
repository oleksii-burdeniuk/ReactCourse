import React from "react";
export const required = (value) => {
    if (value) return undefined
    return 'Field is required'
}
export const maxLength = (length) => (value) => {
    if (value.length > length) return `max length is ${length} symbols`
    return undefined
}