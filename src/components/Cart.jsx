import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

const Cart = () => {
    return (
        <div id="cart">
            <div className="close-cart">
                <CloseIcon fontSize='large' />
            </div>
            <div id='cart-title'>
                <h1>
                    <span className='block'>Your</span>
                    <span className='block'>Shopping</span>
                    <span className='block'>Bag</span>
                </h1>
            </div>
        </div>
    )
}

export default Cart