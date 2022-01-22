import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';





const Posts = (props) =>{
  return(
  <div className={s.postsBlock}> 
        <h3>My posts</h3>
        <div>
           <textarea></textarea>
        </div>
        <div>
          <button>Add</button>
        </div>
      <Post message={props.messages[0].message}/>
      <Post message={props.messages[1].message}/>
      <Post message={props.messages[2].message}/>
      <Post message={props.messages[3].message}/>
    </div>
  );
};

export default Posts;