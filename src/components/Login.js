import React from 'react';
import style from './Login.module.css';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import Validation from '../Validation';

export default function Login () {
    const history = useHistory();
    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: Validation,
        onSubmit: () => {
            
        }
    });
    

    return (
        <div className = {style.login} >
            <div className = {style.login_container}>
                <h2>Welcome Todo App</h2>
                <form className = {style.form} onSubmit = {formik.handleSubmit} >
                    <input name = "username" type="text" placeholder= "   Type ur username..."
                    value = {formik.values.username}
                    onChange = {formik.handleChange}
                     />
                    <input name = "password" type="text" placeholder= "   Type ur password..."
                    value = {formik.values.password} 
                    onChange = {formik.handleChange}
                     />
                    <button type = "submit">Login</button>
                    <Link to ="/Signup" className = {style.linkSignup}>Don't have an account ? Sign up here</Link>
                    {
                        Object.values(formik.errors).map(error => (
                            <div>{error}</div>
                        ))
                    }
                </form>
                
            </div>
        </div>
    );
}