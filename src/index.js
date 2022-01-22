import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
  {id: 1, name: 'Mykola' },
  {id: 2, name: 'Chrystya' },
  {id: 3, name: 'Dima' },
  {id:4 , name: 'Bogdan' },
  {id: 5, name: 'Ruslan' },
  {id: 6, name: 'Nastya' },
];
let posts =[
  {message: 'HI!'},
  {message: 'what is up?!'},
  {message: 'I am hear!'},
  {message: 'where are you?!'},
  {message: 'call me back!!'},
  {message: 'white!'},
  ];
  let messages =[
    {message: 'Hello world' },
    {message: 'I am studying react ' },
    {message: 'I know how to use react' },
    {message: 'Do yo know how to use react?' },
    ];


ReactDOM.render(
  <React.StrictMode>
    <App dialogs = {dialogs} posts = {posts} messages = {messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
