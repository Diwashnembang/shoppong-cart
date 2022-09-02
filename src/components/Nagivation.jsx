import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchProduct from './SearchProduct'
import './nagivation.css'

const Nagivation = () => {
    const [isSearchCllicked, setIsSearchClicked] = useState(false);

    const handleClickOnSearch = (e) => {
        setIsSearchClicked(!isSearchCllicked);
    }


    return (
        <header>
            <nav id='nagivation'>
                <Link to={"/"}> <div id="home">HOME</div></Link>
                <ul id="nagivate">
                    <Link to={"./shop"}><li className='nagivate-text shop'>Shop</li></Link>
                    <li className='nagivate-text search' onClick={handleClickOnSearch}>
                        <SearchIcon fontSize='large' />
                    </li>
                    <li className='nagivate-text Cart'>Cart</li>
                    {isSearchCllicked ? <SearchProduct showSearch={setIsSearchClicked} /> : null}

                </ul>
            </nav>
        </header>
    )
}

export default Nagivation