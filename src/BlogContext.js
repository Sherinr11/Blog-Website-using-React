
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
        console.log('Fetched posts:', response.data); 
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
  

  

  return (
    <BlogContext.Provider value={{ posts, addPost,  loading, error }}>
      {children}
    </BlogContext.Provider>
  );
};
