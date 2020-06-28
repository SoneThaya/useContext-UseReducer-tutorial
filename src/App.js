import React from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import BlogProvider from './context/BlogProvider';
import './App.css';
import PostList from './components/PostList';

function App() {
  return (
    <BlogProvider>
      <div className="App">
        <Navbar />
        <Hero />
        <PostList />
      </div>
    </BlogProvider>
    
  );
}

export default App;
