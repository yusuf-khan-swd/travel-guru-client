import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <Link to='/home'>Home</Link>
      <Link to='/login'>login</Link>
      <Link to='/register'>Register</Link>
    </nav>
  );
};

export default Header;