import React from 'react';
// import ReactDOM from 'react-dom';
import { Link } from 'gatsby';

import Layout from '../components/layout/layout';
import usePosts from '../hooks/use-post';
import PostPreview from '../components/postPreview/post-preview';

// if (process.env.NODE_ENV !== 'production') {
//   var axe = require('react-axe');
//   axe(React, ReactDOM, 1000);
// }

const Index = () => {
  const posts = usePosts();

  return (
    <Layout>
      <h1>Home</h1>
      <p>Hello world</p>
      <Link to="/about">Learn about me &rarr;</Link>

      <h2>Read my posts</h2>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  );
};

export default Index;
