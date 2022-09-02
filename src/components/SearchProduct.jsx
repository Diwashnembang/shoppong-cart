import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

import React from 'react'
import "./search.css"

const SearchProduct = (props) => {
    const { showSearch } = props;
    const handleCloseClick = () => {
        showSearch(false);

    }
    return (
        <div id='search'>
            <section className='close' onClick={handleCloseClick}><CloseIcon fontSize='large' /></section>

            <section className="input">
                <div className="search-logo">
                    <SearchIcon fontSize='16' />
                </div>
                <input type="text" name="search" id="product-search" placeholder='Search product' />

            </section>

        </div>
    )
}

export default SearchProduct