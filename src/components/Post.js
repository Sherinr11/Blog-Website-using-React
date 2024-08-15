
import React from 'react';

const Post = ({ post, onDelete }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <button onClick={onDelete}>Delete Post</button>
    </div>
  );
};

export default Post;