import React from 'react';
import style from './Login.module.css';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

export default function Login () {
    const history = useHistory();
    const handleSubmit = () => {
        //Check some Condition before move to TotoTask
        history.push('/TodoTask');
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