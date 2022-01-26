import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';





const Posts = (props) =>{
  
  let postsElement = props.posts.map( p => <Post message = {p.message} />);
  
  let newPostElement = React.createRef();
  let addPost = () =>{
   let text = newPostElement.current.value
   props.addPost(text);
  }
  
  return(
  
  <div className={s.postsBlock}> 
        
        <h3>My posts</h3>
       
        <div>
           <textarea ref={newPostElement}></textarea>
        </div>
        
        <div>
          <button onClick={addPost} >Add</button>
        </div>
       
        <div>
        {postsElement}
        </div>

    </div>
  );
};

export default Posts;