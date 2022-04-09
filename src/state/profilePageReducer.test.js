import profilePageReducer, { addPostActionCreator, deletePost } from "./profilePageReducer";
import ReactDom from 'react-dom'
import App from '../App'
import React from "react";
let state = {
  posts: [
    { id: 1, message: 'HI!' },
    { id: 2, message: 'what is up?!' },
    { id: 3, message: 'I am hear!' },
    { id: 4, message: 'where are you?!' },
    { id: 5, message: 'call me back!!' },
    { id: 6, message: 'white!' },
  ],
};
it('new post added', () => {
  let action = addPostActionCreator('it-camasutra')

  let newState = profilePageReducer(state, action)

  expect(newState.posts.length).toBe(7)
})
it('new post text is corect', () => {
  let action = addPostActionCreator('it-camasutra')

  let newState = profilePageReducer(state, action)

  expect(newState.posts[6].message).toBe('it-camasutra')
})
it('deleted post', () => {
  let action = deletePost(1)

  let newState = profilePageReducer(state, action)

  expect(newState.posts.length).toBe(5)
})