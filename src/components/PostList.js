import React, { useContext, useEffect } from 'react';
import BlogContext from '../context/blogContext';

const PostList = () => {
  const blogContext = useContext(BlogContext);
  const { getPosts, blogPosts, loading } = blogContext;

  useEffect(() => {
    getPosts();
  }, []);

  console.log(blogPosts)

  return (
    <div>
      Post List
    </div>
  )
}

export default PostList;