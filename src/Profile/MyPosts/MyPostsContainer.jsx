import React from 'react';
import {addPostActionCreator} from '../../state/profilePageReducer';
import {UpdateNewPostTextActionCreator} from '../../state/profilePageReducer';
import StoreContext from '../../storeContext';
import Posts from './MyPosts';


const  PostsContainer = () =>{
return (
  <StoreContext.Consumer>
     {(store) =>{
      let state = store.getState();
      let addPost = () =>{
        store.dispatch( addPostActionCreator() );
        
       }
     
       let onPostChange = (text) =>{
        let action = UpdateNewPostTextActionCreator(text)
        store.dispatch(action);
        
       }

      return <Posts 
            onPostChange = {onPostChange}  
            addPost = {addPost} 
            posts = {state.profilePage.posts}
            newPostsText = {state.profilePage.newPostsText} />
    } }
 </StoreContext.Consumer>
)};

export default PostsContainer;