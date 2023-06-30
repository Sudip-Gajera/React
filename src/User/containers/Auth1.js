import React, { useState } from 'react';

function Auth1(props) {

    const [authtype, setAuthType] = useState('login');
    const [forgottype, setForgotType] = useState(false);

    return (
        <section id="appointment" className="appointment">
            <div className="container">
                <div className="section-title">
                    {
                        forgottype ? <h2>Reset Password</h2> :
                            authtype === 'login' ? <h2>Login</h2> : <h2>SignUp</h2>
                    }
                </div>
                <form action method="post" role="form" className="php-email-form">
                    <div className="row justify-content-center">
                        {
                            authtype === 'signup' ?
                                <div className="col-md-7 form-group">
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                    <div className="validate" />
                                </div> : null
                        }
                        <div className="col-md-7 form-group mt-3 mt-md-0">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                            <div className="validate" />
                        </div>
                        {
                            !forgottype ?
                                <div className="col-md-7 form-group mt-3 mt-md-0">
                                    <input type="password" className="form-control" name="password" id="password" placeholder="Your Password" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                    <div className="validate" />
                                </div> :
                                null

                        }
                    </div>

                    <div className="text-center">
                        {
                            forgottype ? <button type="submit">Reset</button> :
                                authtype === 'login' ? <button type="submit">Login</button> :
                                    <button type="submit">SignUp</button>
                        }
                    </div>
                    <div className="text-center">
                        {
                            forgottype ?
                                <span>Already have an Account?<a href="#" onClick={() => { setAuthType("login"); setForgotType(false) }}>Login</a></span> :
                                authtype === "login" ?
                                    <>
                                        <span>Forgot Password?<a href="#" onClick={() => setForgotType(true)}>Forgot</a></span><br />
                                        <span>Create New Account <a href="#" onClick={() => { setAuthType("signup"); setForgotType(false) }}>Sign Up</a></span>
                                    </>
                                    : <span>Already have an Account?<a href="#" onClick={() => { setAuthType("login"); setForgotType(false) }}>Login</a></span>
                        }
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Auth1;