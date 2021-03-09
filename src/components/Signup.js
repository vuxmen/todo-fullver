import React from 'react';
import style from './Signup.module.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from 'react-router-dom';
import { ValidateSignUp } from '../Validation';

export default function Signup () {
    const history = useHistory();
    const handleGoBackLogin = () => history.push('/'); 

    return (
        <div className = {style.signUp}>
            <div className = {style.header}>
                <ArrowBackIosIcon className = {style.backArrow} onClick = {handleGoBackLogin}/>
                <span>Back to Login</span>
            </div>
            <div className = {style.container}>
                <div className = {style.title}>
                    <h2>Fill your Information</h2>
                </div>
                
                <form >
                    <div className = {style.element}>
                        <label htmlFor="name">Name: </label>
                        <input type="text"/>
                    </div>
                    <div className = {style.element}>
                        <label htmlFor="username">Username: </label>
                        <input type="text"/>
                    </div>
                    <div className = {style.element}>
                        <label htmlFor="password">Password: </label>
                        <input type="text"/>
                    </div>
                    <div className = {style.element}>
                        <label htmlFor="phoneNumber">PhoneNumber: </label>
                        <input type="text"/>
                    </div>
                    <div className = {style.element}>
                        <label htmlFor="email">Email: </label>
                        <input type="text"/>
                    </div>
                    <div className = {style.element}>
                        <label htmlFor="birthday">Birthday: </label>
                        <input type="date"/>
                    </div>
                    <button type = "submit">Sign Up</button>
                </form>
                
            </div>
        </div>
    );
}