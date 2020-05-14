/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { jsx } from '@emotion/core';
import { css } from '@emotion/core';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';

import Layout from '../components/layout/layout';
import ReadLink from '../components/readLink/read-link';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`;

const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <h1>{post.frontmatter.title} </h1>
    <p
      css={css`
        font-size: 0.75rem;
      `}
    >
      Posted by {post.frontmatter.author}
    </p>
    <MDXRenderer>{post.body}</MDXRenderer>
    <p>Post body goes here</p>
    <ReadLink to="/">&larr; Back to all posts</ReadLink>
  </Layout>
);

export default PostTemplate;
