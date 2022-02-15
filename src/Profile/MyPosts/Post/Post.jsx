import React from 'react';
import s from './Post.module.css'
const Post = (props) => {
  return (<div className={s.postsBlock}>
    <div className={s.myPosts}>
      <div>{props.message}</div>
    </div>
  </div>
  );
};

export default Post;