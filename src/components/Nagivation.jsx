import SearchIcon from '@mui/icons-material/Search'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchProduct from './SearchProduct'
import './nagivation.css'

const Nagivation = ({ setIsCartClicked }) => {
  const [isSearchCllicked, setIsSearchClicked] = useState(false)

  const handleClickOnSearch = (e) => {
    setIsSearchClicked(true)
  }

  const showCart = () => {
    setIsCartClicked(true)
  }

  return (
    <>
      <header>
        <nav id='nagivation'>
          <Link to={'/shoppong-cart'}>
            <div id='home'>HOME</div>
          </Link>
          <ul id='nagivate'>
            <Link to={'/shoppong-cart/shop'}>
              <li className='nagivate-text shop'>Shop</li>
            </Link>
            <li
              className='nagivate-text search'
              onClick={handleClickOnSearch}
              data-testid='search'
            >
              <SearchIcon fontSize='large' />
            </li>
            <li className='nagivate-text cart' onClick={showCart}>
              Cart
            </li>
          </ul>
        </nav>
      </header>
      {isSearchCllicked ? (
        <SearchProduct showSearch={setIsSearchClicked} />
      ) : null}
    </>
  )
}

export default Nagivation
