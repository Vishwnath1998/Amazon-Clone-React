import React from 'react'
import './Checkout.css';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useStateValue } from '../Hooks/StateProvider';
import CheckoutProduct from './CheckoutProduct';

export default function Checkout() {

   const [{basket},dispatch] = useStateValue();

    return (
        <div className="checkout">
            <Container>
                <Row>
                    <Col xl={8}>
                        <div className="Checkout_left">
                            <img className="check_image" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
                           
                            <div className="title">
                                <h3 className="checkout_title">Check Your Shopping Basket</h3>
                                 {basket.map(item => (
                                    <CheckoutProduct
                                        id={item.id}
                                        title={item.title}
                                        image={item.image}
                                        price={item.price}
                                        rating={item.rating}
                                    >
                                        </CheckoutProduct>)
                                
                                )}
                                
                              
                            </div>
                        </div>
                    </Col>
                    <Col xl={4}>
                        <div className="Checkout_right">
                          
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
