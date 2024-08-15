
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BlogProvider } from './BlogContext';

import HomeDashboard from './components/HomeDashboard';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import SinglePost from './components/SinglePost';
import ErrorPage from './components/ErrorPage';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <BlogProvider>
        
        <div className="App">
          <Routes>
           
            <Route path="/" element={<HomeDashboard />} />
     
            <Route path="/posts" element={<PostList />} />
            
           
            <Route path="/posts/:id" element={<SinglePost />} />
            
           
            <Route path="/post/new" element={<PostForm />} />
            
        
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
       
      </BlogProvider>
    </BrowserRouter>
  );
}

export default App;
