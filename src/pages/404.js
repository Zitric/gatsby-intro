import React from 'react';
import { Link } from 'gatsby';

const ErrorPage404 = () => (
  <>
    <h1>Page not found</h1>
    <p>Oops! The page you are looking for has been removed or relocated</p>
    <Link to="/">&larr; back to home</Link>
  </>
);

export default ErrorPage404;
