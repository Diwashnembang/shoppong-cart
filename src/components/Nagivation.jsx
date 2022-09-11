import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchProduct from './SearchProduct'
import './nagivation.css'

const Nagivation = () => {
  const [isSearchCllicked, setIsSearchClicked] = useState(false);

  const handleClickOnSearch = (e) => {
    setIsSearchClicked(true);
  }


  return (
    <>
      <header>
        <nav id='nagivation'>
          <Link to={"/"}> <div id="home">HOME</div></Link>
          <ul id="nagivate">
            <Link to={"./shop"}><li className='nagivate-text shop'>Shop</li></Link>
            <li className='nagivate-text search' onClick={handleClickOnSearch} data-testid="search">
              <SearchIcon fontSize='large' />
            </li>
            <li className='nagivate-text cart'>Cart</li>

          </ul>
        </nav>
      </header>
      {isSearchCllicked ? <SearchProduct showSearch={setIsSearchClicked} /> : null}
    </>
  )
}

export default Nagivation