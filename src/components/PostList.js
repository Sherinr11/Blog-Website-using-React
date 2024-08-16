
import React, { useContext, useState } from 'react';
import { BlogContext } from '../BlogContext';
import { Link } from 'react-router-dom';
import './assets/PostList.css';

const PostList = () => {
  const { posts,error } = useContext(BlogContext);
  



  return (
    <div className="post-list">
      <h2>All Posts</h2>
      {error && <p className="error-message">{error}</p>}
      <ul>
        {posts.length === 0 ? (
          <p>No posts available.</p>
        ) : (
          posts.map(post => (
            <li key={post.id}>
              <h3><Link to={`/posts/${post.id}`}>{post.title}</Link></h3>
             
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default PostList;
