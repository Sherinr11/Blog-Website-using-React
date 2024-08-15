
import React, { useContext, useState } from 'react';
import { BlogContext } from '../BlogContext';
import { Link } from 'react-router-dom';
import './assets/PostList.css';

const PostList = () => {
  const { posts, deletePost, error } = useContext(BlogContext);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      setIsDeleting(true);
      deletePost(id)
        .then(() => setIsDeleting(false))
        .catch(err => {
          setIsDeleting(false);
          console.error('Delete error:', err);
        });
    }
  };

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
              <button
                onClick={() => handleDelete(post.id)}
                disabled={isDeleting}
              >
                {isDeleting ? 'Deleting...' : 'Delete'}
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default PostList;
