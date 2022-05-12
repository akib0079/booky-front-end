import React from 'react';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './SocialLogIn.css';
import googleLogo from '../../../images/logoGoogle.png'

const SocialLogIns = () => {

    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);


    // Redirecting to past page after logIn
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";

    if (userGoogle) {
        navigate(from, { replace: true });
    }

    return (
        <div className='socialLogIns'>
            {/* Google SignIn */}
            <button onClick={() => signInWithGoogle()} className='socialLogBtn'>
                <img className='g_logo' src={googleLogo} alt="" />
                Continue with Google</button>
            {/* Facebook SignIn */}
            <p className='text-danger mt-1 mb-0'>{errorGoogle?.message.slice(9)}</p>
            {
                loadingGoogle ?
                    <p className='text-success m-0'>Waiting for your access...</p>
                    :
                    <p className='text-success m-0'></p>
            }
        </div>
    );
};

export default SocialLogIns;