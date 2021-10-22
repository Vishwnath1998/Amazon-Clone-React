import React from 'react'
import './Header.css'
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useStateValue } from '../Hooks/StateProvider';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import RoomIcon from '@mui/icons-material/Room';
import SearchIcon from '@mui/icons-material/Search';
import fire from '../firebase'
import auth from '../firebase'
import Login from './Login';
import fireDb from '../firebase'

export default function Header() {
    const [state,user] = useStateValue();


 const handleAuthentication = ()=>{
     if(state.user){
        fireDb.auth.signOut();
     }
 }


    return (
        <div className='header'>
            <Link to='/'>
                <img className='header_logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' />
            </Link>
            <div className='header_text'>
                <div>
                    <RoomIcon />
                </div>
                <div>
                    <span>Hello</span>
                    <span>Select Your Address</span>
                </div>
            </div>
            <div className='search_box'>
                <div className='header_search'>
                    <div className='all'>
                        <div className='Dropdown'>
                            <Dropdown>
                                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                    All
                                </Dropdown.Toggle>
                                <Dropdown.Menu >
                                    <Dropdown.Item href="#/action-1" id='drop' >All Categories</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2" id='drop'>Deals</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3" id='drop'>Alexa skill</Dropdown.Item>
                                    <Dropdown.Item href="#/action-4" id='drop'>Amazon Devices</Dropdown.Item>
                                    <Dropdown.Item href="#/action-5" id='drop'>Amazon fashion</Dropdown.Item>
                                    <Dropdown.Item href="#/action-6" id='drop'>Appliances</Dropdown.Item>
                                    <Dropdown.Item href="#/action-7" id='drop'>Electronic</Dropdown.Item>
                                    <Dropdown.Item href="#/action-8" id='drop'>car & motorbike</Dropdown.Item>
                                    <Dropdown.Item href="#/action-9" id='drop'>clothing</Dropdown.Item>
                                    <Dropdown.Item href="#/action-10" id='drop'>furniture</Dropdown.Item>
                                    <Dropdown.Item href="#/action-11" id='drop'>Gifts & Gardens</Dropdown.Item>
                                    <Dropdown.Item href="#/action-12" id='drop'>Video Games</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <input className='header_input' type='text' />
                    <div className='search-bar'>
                        <SearchIcon />
                    </div>
                </div>
            </div>
            <div className='header_nav'>
                <Link to={ !state.user && '/login'} style = {{textDecoration:'none'}}>
                    <div className='navigate' onClick ={handleAuthentication}>
                        <span className='navigate_one'>{state.user ? state.user.email :"Hello,Sign in"}</span>
                        <span className='navigate_two'> {state.user ? 'sign Out':'Account & List'}</span>
                    </div>
                </Link>

                <Link to='/Order'>
                    <div className='navigate'>
                        <span className='navigate_three'>Return</span>
                        <span className='navigate_four'>& Order</span>
                    </div>
                </Link>
                <Link to='/checkout'>
                    <div className='navigate'>
                        <span className='navigate_five'>
                            <ShoppingBasketIcon />
                            <span className="header_count">{state.basket?.length}</span>
                        </span>
                        <span className='navigate_six'>Cart</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}
