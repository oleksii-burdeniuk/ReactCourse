import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';



let messages =[
{message: 'Hello world' },
{message: 'I am studying react ' },
{message: 'I know how to use react' },
{message: 'Do yo know how to use react?' },
];


const Posts = () =>{
  return(
  <div className={s.postsBlock}> 
        <h3>My posts</h3>
        <div>
           <textarea></textarea>
        </div>
        <div>
          <button>Add</button>
        </div>
      <Post message={messages[0].message}/>
      <Post message={messages[1].message}/>
      <Post message={messages[2].message}/>
      <Post message={messages[3].message}/>
    </div>
  );
};

export default Posts;