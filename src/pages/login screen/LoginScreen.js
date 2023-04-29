import React, { useState } from 'react';
import './LoginScreen.css';
import SignInScreen from '../SignInScreen/SignInScreen';

const LoginScreen = () => {
    const [signIn, setSignIn] = useState(false);
    return (
        <>
            <div className="loginScreen">
                <div className="loginScreen__gradient" />
                {signIn ? (
                    <SignInScreen />
                ) : (
                    <>
                        <div className="loginScreen__background">
                            <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                                alt="logo"
                                className="loginScreen__logo"
                            />
                            <button
                                onClick={() => setSignIn(preState => !preState)}
                                className="loginScreen__button">
                                Sign In
                            </button>

                        </div>
                        <div className="loginScreen__body">
                            <h1>Unlimited films, TV programmes and more.</h1>
                            <h2>Watch anywhere.Cancel at anytime.</h2>
                            <h3>Ready to watch?Enter your email to create or restart your membership.</h3>
                            <div className="loginScreen__input">
                                <form>
                                    <input type="email" placeholder="Email Address" />
                                    <button
                                        onClick={() => setSignIn(preState => !preState)}
                                        className="loginScreen__getStarted">
                                        Get Started
                                    </button>
                                </form>
                            </div>
                        </div>
                    </>
                )}


            </div>
        </>
    );
}

export default LoginScreen;