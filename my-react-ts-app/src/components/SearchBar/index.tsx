import React, { FC, ReactElement } from 'react';
import { SearchIcon } from './SearchIcon';
import './style.scss';

// type ChildProps = {
//   name: string,
//   id: number,
//   bio?: string,
// }
// FC<ChildProps>

const Searchbar = (): ReactElement => {
  return (
    <div className='searchbar' >
      <SearchIcon />
      <input className='searchbar__input' type='text' />
    </div>
  )
}

export default Searchbar;