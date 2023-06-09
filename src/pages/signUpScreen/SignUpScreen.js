import React, { useState } from "react";
import "./SignUpScreen.css";
import { auth } from "../../firebase";
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import  { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"

const SignUpScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ passShow, setPassShow] = useState(false);
    const Navigate = useNavigate();

    const Register = async (e) => {
        e.preventDefault();
        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('user', user);
                Navigate("/login");
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
            <div className="loginScreen">
                <div className="loginScreen__gradient" />
                <div className="signInScreen">
                    <h2>Sign Up</h2>
                    <div className="signInScreen__form">
                        <form>
                            <div className="signInScreen__input">
                                <input onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder="Email Address" />
                                <input onChange={e => setPassword(e.target.value)} value={password} type={passShow?"text":"password"} placeholder="Password" />
                            </div>
                            <div className="signUpScreen__passShow" onClick={()=>setPassShow(preState=>!preState)}>
                                {passShow?<AiFillEye style={{fontSize:"22px"}} />:<AiFillEyeInvisible style={{fontSize:"22px"}} />}
                            </div>
                            <button onClick={ Register } type="submit" className="singInScreen__button">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUpScreen;