import { Button } from '@material-ui/core';
import React from 'react'
import "./Login.css";
import {auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = ()=>{
        auth
        .signInWithPopup(provider)
        .then((result) =>{

            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })



            console.log(result.user)
        })
        .catch((error)=> alert(error.message))

    }
    return (
        <div className="login">
            <div className="loginLogo">
                <img
                src="https://www.logolynx.com/images/logolynx/9a/9a9ddd0444417748eefa19f5cf7dcc1c.png"
                alt=""
                
                />
                <img
                className="name"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Comet_Group_logo.svg/1200px-Comet_Group_logo.svg.png"
                alt=""
                
                />
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
            
        </div>
    )
}

export default Login;
