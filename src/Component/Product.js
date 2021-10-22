import React from 'react'
import './Product.css'
import Button from 'react-bootstrap/Button'
import { useStateValue } from '../Hooks/StateProvider';

function Product({ id, title, image, price, rating }) {

    const [ , dispatch] = useStateValue();
    const addtobasket = () => {
        // arriving the items in data
        dispatch({
            type: "ADD TO CART",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
               rating: rating,
            },
        });

    };
 return (
        <div className='product'>
            <div className="product_info">
                <p>{title}</p>
                <div className="product__price">
                    <strong> ${price}</strong>
                </div>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>🌟</p>
                        ))}
                </div>
            </div>
            <img src={image} alt="" />
            <Button onClick={addtobasket} variant="outline-warning">Add to Cart</Button>{' '}
        </div>
    )
}

export default Product
