import React, { useState } from 'react';
import './assets/PostForm.css';

const PostForm = () => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  

  

  return (
    <div className="post-form">
      <h2>Add New Post</h2>
    
      <form >
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post Title"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Post Content"
        />
        <button type="submit">Save Post</button>
      </form>
    </div>
  );
};

export default PostForm;
