// src/BlogContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/posts')
      .then(response => {
        console.log('Fetched posts:', response.data); // Debugging log
        setPosts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
        setError('Failed to fetch posts.');
        setLoading(false);
      });
  }, []);

  const addPost = (newPost) => {
    return axios.post('http://localhost:5000/posts', newPost)
      .then(response => {
        setPosts([...posts, response.data]);
      })
      .catch(error => {
        console.error('Error adding post:', error);
        throw error;
      });
  };
  

  const deletePost = (id) => {
    return axios.delete(`http://localhost:5000/posts/${id}`)
      .then(response => {
        console.log('Deleted post:', id); // Debugging log
        if (response.status === 200) {
          setPosts(posts.filter(post => post.id !== id));
        } else {
          throw new Error(`Unexpected response status: ${response.status}`);
        }
      })
      .catch(error => {
        console.error('Error deleting post:', error.response ? error.response.data : error.message);
        setError('Failed to delete the post.');
        throw error;
      });
  };

  return (
    <BlogContext.Provider value={{ posts, addPost, deletePost, loading, error }}>
      {children}
    </BlogContext.Provider>
  );
};
