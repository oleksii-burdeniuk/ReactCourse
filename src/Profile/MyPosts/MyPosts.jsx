import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {addPostActionCreator} from '../../state/profilePageReducer';
import {UpdateNewPostTextActionCreator} from '../../state/profilePageReducer';


const Posts = (props) =>{
  
  let postsElement = props.posts.map( p => <Post message = {p.message} />);
  
  let addPost = () =>{
   props.dispatch( addPostActionCreator() );
   
  }

  let onPostChange = (v) =>{
   let text =  v.target.value;
   let action = UpdateNewPostTextActionCreator(text)
   props.dispatch(action);
   
  }
  
  return(
  
  <div className={s.postsBlock}> 
        
        <h3>My posts</h3>
       
        <div>
           <textarea onChange={ onPostChange } value = {props.newPostsText} />
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