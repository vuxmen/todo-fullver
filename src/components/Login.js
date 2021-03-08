import React from 'react';
import style from './Login.module.css';
import { Link } from 'react-router-dom';
import Signup from './Signup';

export default function Login () {
    const handleSubmit = () => {

    }

    return (
        <div className = {style.login} >
            <div className = {style.login_container}>
                <h2>Welcome Todo App</h2>
                <form className = {style.form} >
                    <input type="text" placeholder= "   Type ur username..." />
                    <input type="text" placeholder= "   Type ur password..." />
                    <button type = "submit" onClick = {handleSubmit}>Login</button>
                    <Link to ="/Signup" className = {style.linkSignup}>Don't have an account ? Sign up here</Link>
                </form>
                
            </div>
        </div>
    );
}