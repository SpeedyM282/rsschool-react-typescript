import React, { FC, ReactElement } from 'react';
import Searchbar from '../SearchBar';
import './style.scss';

// type ChildProps = {
//   name: string,
//   id: number,
//   bio?: string,
// }
// FC<ChildProps>

const Navbar = (): ReactElement => {
  return (
    <nav className='navbar'>
      <h1 className='navbar__heading'>TS Project</h1>

      <ul className='navbar__items'>
        <li className='navbar__items-item'>Home</li>
        <li className='navbar__items-item'>About Us</li>
      </ul>

      <Searchbar />
    </nav>
  )
}

export default Navbar;