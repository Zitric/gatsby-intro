import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'gatsby';

if (process.env.NODE_ENV !== 'production') {
  var axe = require('react-axe');
  axe(React, ReactDOM, 1000);
}

const Index = () => (
  <>
    <h1>Home</h1>
    <p>Hello world</p>
    <Link to="/about">Learn about me &rarr;</Link>
  </>
);

export default Index;
