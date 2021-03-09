import React from 'react';
import style from './Login.module.css';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Formik, Form, FastField } from 'formik';
import { ValidateLogin } from '../Validation';
import { Button } from 'reactstrap';
import  InputField  from '../customField/InputField';

export default function Login () {
    const initialValues = {
        username: '',
        password: ''
    };

    return (
        <div className={style.login} >
            <div className={style.login_container}>
                <h2>Welcome Todo App</h2>
                <Formik 
                    initialValues={initialValues}
                    validationSchema={ValidateLogin}
                    onSubmit={values => console.log(values)}
                >
                    {formikProps => {
                        //do something
                        const {values, errors, touched} = formikProps;
                        console.log({values, errors, touched});
                        return (
                            <Form className={style.form} >
                                <FastField 
                                    name="username"
                                    component={InputField}

                                    placeholder="Type ur username..."        
                                />

                                <FastField
                                    name="password"
                                    component={InputField}

                                    placeholder="Type ur password..."
                                />
                
                                <Button type="submit">Login</Button>
                                <Link to="/Signup" className={style.linkSignup}>Don't have an account ? Sign up here</Link>
                            </Form>
                        );
                    }}
                </Formik>
                
                
            </div>
        </div>
    );
}