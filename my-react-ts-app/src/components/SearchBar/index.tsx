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
    <form className='searchbar' >
      <div className='searchbar__block' >
        <SearchIcon />
        <input className='searchbar__block-input' type='text' />
      </div>
      <button className='searchbar__button' >Search</button>
    </form>
  )
}

export default Searchbar;