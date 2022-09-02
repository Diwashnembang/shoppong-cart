import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import "./search.css"

const SearchProduct = () => {
    return (
        <div id='search'>
            <section className='close'> X</section>

            <section className="input">
                <div className="search-logo">
                    <SearchIcon sx={{ fontSize: 24 }} />
                </div>
                <input type="text" name="search" id="product-search" placeholder='Search product' />

            </section>

        </div>
    )
}

export default SearchProduct