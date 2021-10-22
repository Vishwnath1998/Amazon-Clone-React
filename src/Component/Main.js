import React from 'react'
import './Main.css'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Product from './Product'

export default function Main() {
    return (
        <div className="main">
            <div className='main_cursol'>
                <Container fluid="md" className="main">
                    <Row>
                        <Col md={1}>
                        </Col>
                        <Col md={10}>
                            <Carousel>
                                <Carousel.Item  interval={700}>
                                    <img className='image' src='https://m.media-amazon.com/images/I/61FuWeCuGCL._SX3000_.jpg' alt='' />
                                </Carousel.Item>
                                <Carousel.Item interval={500}>
                                    <img className='image' src='https://m.media-amazon.com/images/I/51jKifqW4XL._SX3000_.jpg' alt='' />
                                </Carousel.Item>
                                <Carousel.Item interval={400} >
                                    <img className='image' src='https://m.media-amazon.com/images/I/61O2X1ai1ML._SX3000_.jpg' alt='' />
                                </Carousel.Item>
                                <Carousel.Item interval={300}>
                                    <img className='image' src='https://m.media-amazon.com/images/I/614ULQXgE4L._SX3000_.jpg' alt='' />
                                </Carousel.Item>
                            </Carousel>
                            <div className="home__row">
                                <Product
                                    id="1"
                                    title="Great INDIAN Festival 10% HDFC BANK"
                                    price={0}
                                    rating={5}
                                    image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/JupiterT1/Eng_1x._SY304_CB640989812_.jpg" alt='' />
                                <Product
                                    id="2"
                                    title="Up to 70% off | Electronics clearance store"
                                    price={12.96}
                                    rating={4}
                                    image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Clearance/May21/V238940049_IN_PC_BAU_Edit_Creation_Laptops1x._SY304_CB667377205_.jpg" alt='' />
                                <Product
                                    id="3"
                                    title="Shop from small businesses | Get rewards"
                                    price={11.96}
                                    rating={3}
                                    image="https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/Jupiter21/Teaser3-cc_1x1._SY304_CB639696076_.jpg" alt='' />
                                <Product
                                    id="4"
                                    title=" $ Welcome Offers $  Terms & Condition"
                                    price={0}
                                    rating={5}
                                    image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GW/JUP21/T2/PC_CC_NTA_1X_english._SY304_CB641485549_.jpg" alt='' />
                            </div>
                            <div className="home__row">
                               <div className='cards'>
                               <Product
                                    id="5"
                                    title="Men's Go Focus Running Shoes Sparx"
                                    price={100}
                                    rating={5}
                                    image="	https://images-na.ssl-images-amazon.com/images/I/71ki1tnypwL._AC_UX500_.jpg" alt='' />
                                <Product
                                    id="6"
                                    title="boAt Wireless Bluetooth in Ear Earbuds  Mic"
                                    price={10}
                                    rating={4}
                                    image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Audio/Jupiter21/GW/Audio_Desktop_CC_1x._SY304_CB640008131_.jpg" alt='' />
                                <Product
                                    id="7"
                                    title="Canon PowerShot SX430 IS 20MP Lumix"
                                    price={99}
                                    rating={3}
                                    image="https://images-eu.ssl-images-amazon.com/images/G/31/Cameras/MSO/379x304_pc_card_1._SY304_CB643056800_.jpg" alt=''/>
                                <Product
                                    id="8"
                                    title="Mobile & Headphone Speaker Phone"
                                    price={196}
                                    rating={2}
                                    image="https://i.insider.com/5a7380ae10729096118b49fb?width=600&format=jpeg&auto=webp" alt='' />
                               </div>                           
                            </div>
                        </Col>
                        <Col md={1}>  </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
