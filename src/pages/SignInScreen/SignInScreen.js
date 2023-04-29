import React, { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from 'firebase/auth';
import "./SignInScreen.css";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";


const SignInScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const Navigate = useNavigate();

    const SignIn = async (e) => {
        e.preventDefault();
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                Navigate("/profile");
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage, errorCode);
                console.log(errorCode, errorMessage);
            });
        setEmail('');
        setPassword('');

    }

    return (
        <>
            <div className="signInScreen">
                <h2>Sign In</h2>
                <div className="signInScreen__form">
                    <form>
                        <div className="signInScreen__input">
                            <input onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder="Email Address" />
                            <input onChange={e => setPassword(e.target.value)} value={password} type={show?"text":"password"} placeholder="Password" />
                        </div>
                        <div className="signInScreen__passShow" onClick={() => setShow(preState => !preState)} >
                            {show ?
                                (<AiFillEye style={{fontSize:"22px"}} />)
                                :
                                (<AiFillEyeInvisible style={{fontSize:"22px"}} />)
                            }
                        </div>
                        <button onClick={SignIn} type="submit" className="singInScreen__button">Sign In</button>
                        <div className="signUp__link">
                            <p>No account yet?</p>
                            <Link to="/signUp" >Sign up now.</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignInScreen;