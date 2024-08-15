import React, { useState, useContext } from 'react';
import { BlogContext } from '../BlogContext';
import './assets/PostForm.css';

const PostForm = () => {
  const { addPost } = useContext(BlogContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      const newPost = { title, content };
      addPost(newPost)
        .then(() => {
          setTitle('');
          setContent('');
        })
        .catch(err => setError('Failed to add post.'));
    } else {
      setError('Title and content are required.');
    }
  };

  return (
    <div className="post-form">
      <h2>Add New Post</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
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
