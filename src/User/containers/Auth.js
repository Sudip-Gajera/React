import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router';
import Button from '../components/UI/Button/Button';
import Input from '../components/UI/Input/Input';
import Heading from '../components/UI/Heading/Heading';

function Auth(props) {

    const [authtype, setAuthType] = useState('login');
    let navigate = useNavigate();

    const handleLogin = () => {
        let LoginData = localStorage.setItem('login', 'true');
        navigate('/');
    }

    let authObj = {}, initVal = {};

    if (authtype === 'login') {
        authObj = {
            email: Yup.string()
                .required('Please enter your email')
                .email('Please enter valid email'),
            password: Yup.string()
                .required('No password provided.')
                .min(8, 'Password is too short - should be 8 chars minimum.')
                .matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/, 'Password can only contain Latin letters.'),
        }
        initVal = {
            email: '',
            password: '',
        }
    } else if (authtype === 'signup') {
        authObj = {
            name: Yup.string()
                .required('Please enter your name')
                .matches(/^[A-Za-z ]*$/, 'please enter Only character'),
            email: Yup.string()
                .required('Please enter your email')
                .email('Please enter valid email'),
            password: Yup.string()
                .required('No password provided.')
                .min(8, 'Password is too short - should be 8 chars minimum.')
                .matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/, 'Password can only contain Latin letters.'),
        }
        initVal = {
            name: '',
            email: '',
            password: '',
        }
    } else {
        authObj = {
            email: Yup.string()
                .required('Please enter your email')
                .email('Please enter valid email'),
        }
        initVal = {
            email: '',
        }
    }

    let contactSchema = Yup.object(authObj);

    const formik = useFormik({
        validationSchema: contactSchema,
        initialValues: initVal,
        enableReinitialize: true,

        onSubmit: (values, action) => {
            console.log(values);
            action.resetForm();
            if (authtype === 'login') {
                handleLogin()
            }
        },
    });

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = formik;

    return (
        <section id="appointment" className="appointment">
            <div className="container">
                <div className="section-title">
                    {
                        authtype === 'login' ? <Heading type='title'>Login</Heading> :
                            // authtype === 'login' ? <h2>Login</h2> :
                            // authtype === 'signup' ? <h2>SignUp</h2> : <h2>Reset Password</h2>
                            authtype === 'signup' ? <Heading type='title'>SignUp</Heading> : <Heading type='title'>Reset Password</Heading>
                    }
                </div>
                <form action method="post" role="form" className="php-email-form" onSubmit={handleSubmit}>
                    <div className="row justify-content-center">
                        {
                            authtype === 'login' || authtype === 'forgot' ? null :
                                <div className="col-md-7 form-group">
                                    <Input type="text"
                                        name="name"
                                        id="name"
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="Your Name"
                                        errorText={errors.name && touched.name ? errors.name : ''} />
                                </div>
                        }
                        <div className="col-md-7 form-group mt-3 mt-md-0">
                            <Input type="email"
                                name="email"
                                id="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Your Email"
                                errorText={errors.email && touched.email ? errors.email : ''} />
                        </div>
                        {
                            authtype !== "forgot" ?
                                <div className="col-md-7 form-group mt-3 mt-md-0">
                                    <Input type="password"
                                        name="password"
                                        id="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="Your Password"
                                        errorText={errors.password && touched.password ? errors.password : ''} />
                                </div> :
                                null
                        }
                    </div>

                    <div className="text-center">
                        {/* {
                            authtype === 'login' ? <button type="submit">Login</button> :
                                authtype === 'signup' ? <button type="submit">SignUp</button> :
                                    <button type="submit">Submit</button>
                        } */}
                        {
                            // authtype === 'login' ? <CustomButton val={'Login'} /> :
                            authtype === 'login' ? <Button type='primary' btnDisable='true'>Login</Button> :
                                authtype === 'signup' ? <Button type='secondary'>SignUp</Button> :
                                    <Button type='outlined'>Submit</Button>
                        }
                    </div>
                    <div className="text-center">
                        {
                            authtype === 'login' ?
                                <>
                                    <span>Forgot Password?<a href="#" onClick={() => setAuthType("forgot")}>Forgot</a></span><br />
                                    <span>Create Account<a href="#" onClick={() => setAuthType("signup")}>Sign Up</a></span>
                                </> :
                                <span>Already have an Account?<a href="#" onClick={() => setAuthType("login")}>Login</a></span>
                        }
                    </div>
                    <div className="text-center">
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Auth;