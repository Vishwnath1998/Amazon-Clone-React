import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import fire from '../firebase'
import auth from '../firebase'
import firebaseApp from '../firebase'



function Login() {

    const history = useHistory();


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const signUser = e => {
        e.preventDefault();

        firebaseApp.auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
               history.push('/')
            })
            .catch(error => console.log(error.message))
    }
    const logUser = e => {
        e.preventDefault();
        
        firebaseApp.auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // console.log(auth);
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }
    
    return (
        <div className='login'>
            <Link to='/'>
                <img className='login_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' />
            </Link>
            <div className='login_container'>
                <h2>Sign-In</h2>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                    <button className='sign_in' type="submit" onClick={signUser}>Sign-In</button>
                </form>
                <p> By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
                <button className='log_in' type='submit' onClick={logUser}>Create Your Account</button>
            </div>
        </div>
    )
}

export default Login
