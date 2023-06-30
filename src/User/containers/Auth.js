import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Auth(props) {

    const [authtype, setAuthType] = useState('login');

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
            alert(values);
        },
    });

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = formik;

    return (
        <section id="appointment" className="appointment">
            <div className="container">
                <div className="section-title">
                    {
                        authtype === 'login' ? <h2>Login</h2> :
                            authtype === 'signup' ? <h2>SignUp</h2> : <h2>Reset Password</h2>
                    }
                </div>
                <form action method="post" role="form" className="php-email-form" onSubmit={handleSubmit}>
                    <div className="row justify-content-center">
                        {
                            authtype === 'login' || authtype === 'forgot' ? null :
                                <div className="col-md-7 form-group">
                                    <input type="text"
                                        name="name"
                                        className="form-control"
                                        id="name"
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="Your Name" />
                                    <span className='err'>{errors.name && touched.name ? errors.name : ''}</span>
                                </div>
                        }
                        <div className="col-md-7 form-group mt-3 mt-md-0">
                            <input type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Your Email" />
                            <span className='err'>{errors.email && touched.email ? errors.email : ''}</span>
                        </div>
                        {
                            authtype !== "forgot" ?
                                <div className="col-md-7 form-group mt-3 mt-md-0">
                                    <input type="password"
                                        className="form-control"
                                        name="password"
                                        id="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="Your Password" />
                                    <span className='err'>{errors.password && touched.password ? errors.password : ''}</span>
                                </div> :
                                null

                        }
                    </div>

                    <div className="text-center">
                        {
                            authtype === 'login' ? <button type="submit">Login</button> :
                                authtype === 'signup' ? <button type="submit">SignUp</button> :
                                    <button type="submit">Submit</button>
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