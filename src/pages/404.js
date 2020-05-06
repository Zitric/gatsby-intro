import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout/layout';

const ErrorPage404 = () => (
  <Layout>
    <h1>Page not found</h1>
    <p>Oops! The page you are looking for has been removed or relocated</p>
    <Link to="/">&larr; back to home</Link>
  </Layout>
);

export default ErrorPage404;
