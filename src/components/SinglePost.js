import React, { useContext } from 'react';
import { BlogContext } from '../BlogContext';
import { useParams } from 'react-router-dom';
import './assets/SinglePost.css';

const SinglePost = () => {
  const { id } = useParams();
  const { posts } = useContext(BlogContext);
  const post = posts.find(post => post.id === id);

  if (!post) return <p>Post not found</p>;

  return (
    <div className="single-post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};

export default SinglePost;
