import React from 'react';
import {addPostActionCreator} from '../../state/profilePageReducer';
import {UpdateNewPostTextActionCreator} from '../../state/profilePageReducer';
import Posts from './MyPosts';


const  PostsContainer = (props) =>{
    
  let addPost = () =>{
   
   props.dispatch( addPostActionCreator() );
   
  }

  let onPostChange = (text) =>{
    
   let action = UpdateNewPostTextActionCreator(text)
   props.dispatch(action);
   
  }
return <Posts 
            onPostChange = {onPostChange}  
            addPost = {addPost} 
            posts = {props.store.profilePage.posts}
            newPostsText = {props.store.profilePage.newPostsText} />
};

export default PostsContainer;