import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';





const Posts = (props) =>{
  
  let postsElement = props.posts.map( p => <Post message = {p.message} />);
  
  let newPostElement = React.createRef();
  
  let addPost = () =>{
   let text = newPostElement.current.value
   props.dispatch({type: 'ADD-POST'});
   
  }

  let onPostChange = () =>{
   let text =  newPostElement.current.value;
   props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
   
  }
  
  return(
  
  <div className={s.postsBlock}> 
        
        <h3>My posts</h3>
       
        <div>
           <textarea onChange={ onPostChange } ref={newPostElement} value = {props.newPostsText} />
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