import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/brand/logo.png';

const Header = () => {
  return (
    <nav className='flex justify-between items-center pr-14 pl-14 p-3'>
      <div>
        <Link to='/'>
          <img className='w-32' src={logo} alt="" />
        </Link>
      </div>
      <div>
        <Link className='mr-4 hover:text-orange-400' to='/home'>Home</Link>
        <Link className='mr-4 hover:text-orange-400' to='/login'>login</Link>
        <Link className='mr-4 hover:text-orange-400' to='/register'>Register</Link>
      </div>
    </nav>
  );
};

export default Header;