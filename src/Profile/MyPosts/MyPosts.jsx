import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../common/preloader/formsControls/FormsControls';
import { maxLength, required } from '../../utils/validators/validators';
import s from './MyPosts.module.css'
import Post from './Post/Post';
let maxLength30 = maxLength(30)
const PostsForm = (props) => {

  return <form onSubmit={props.handleSubmit}>
    <div>
      <Field placeholder='New text' name='newText' component={Textarea}
        validate={[required, maxLength30]} />
    </div>

    <div>
      <button >Add</button>
    </div>
  </form>
}

const ReduxPostsForm = reduxForm({ form: 'post' })(PostsForm)
const Posts = (props) => {

  let postsElement = props.posts.map(p =>
    <Post message={p.message} kay={p.id} />);

  let addPost = (formData) => {
    props.addPost(formData.newText);
  }

  return (

    <div className={s.postsBlock}>

      <h3>My posts</h3>
      <ReduxPostsForm onSubmit={addPost} />
      <div>
        {postsElement}
      </div>
    </div>
  );
};

export default Posts;