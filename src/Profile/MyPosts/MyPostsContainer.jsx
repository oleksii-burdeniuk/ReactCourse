import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator } from '../../state/profilePageReducer';
import Posts from './MyPosts';




let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostsText: state.profilePage.newPostsText
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (formData) => {
      dispatch(addPostActionCreator(formData));
    }
  }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;