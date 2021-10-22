import React from 'react'
import './CheckoutProduct.css'
import Button from 'react-bootstrap/Button'
import { useStateValue } from '../Hooks/StateProvider'


function CheckoutProduct({ id, image, title, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();
    
    const removeFromBasket = ()=>{
        dispatch ({
            type : "REMOVE FROM BASKET",
            id:id,
        })
    }

    return (
        <div className='CheckoutProduct'>
            
            <img className='CheckoutProduct_img' src={image} />
            <div className='CheckoutProduct_info'>
                <p className='CheckoutProduct_title'>{title}</p>
                <p className='CheckoutProduct_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='CheckoutProduct_rating'>
                    {Array(rating).fill().map((_, i) => {
                        <p>🌟</p>
                    })}

                </div>
                <Button onClick={removeFromBasket}variant="outline-warning">Remove Item</Button>{' '}

            </div>

        </div>
    )
}

export default CheckoutProduct
