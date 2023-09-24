import cart from '../assets/cart.svg';
import React from 'react'

const CartWidget = () => {
    return (
        <div>
            <img src={cart} alt="cart-widget" />
            <span className='number-static'>0</span>
        </div>
    )
}
export default CartWidget 