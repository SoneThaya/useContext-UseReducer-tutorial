import React from 'react';
import Navbar from './components/Navbar'
import BlogProvider from './context/BlogProvider';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Post'

function App() {
  return (
    <BlogProvider>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/:postId' exact component={Post} />
          </Switch>
        </Router>  
      </div>
    </BlogProvider>
    
  );
}

export default App;
