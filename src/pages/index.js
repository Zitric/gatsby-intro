import React from 'react';

import Layout from '../components/layout/layout';
import usePosts from '../hooks/use-post';
import PostPreview from '../components/postPreview/post-preview';
import Hero from '../components/hero/hero';
import Insta from '../components/insta/insta';

// if (process.env.NODE_ENV !== 'production') {
//   var axe = require('react-axe');
//   axe(React, ReactDOM, 1000);
// }

const Index = () => {
  const posts = usePosts();

  return (
    <>
      <Hero />
      <Layout>
        <h2>Read my posts</h2>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
        <Insta />
      </Layout>
    </>
  );
};

export default Index;
