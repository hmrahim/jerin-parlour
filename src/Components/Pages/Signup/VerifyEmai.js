import React from 'react';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const VerifyEmai = () => {
    const [sendEmailVerification, sending, VerifyError] = useSendEmailVerification(auth)
    const sendEmail = ()=> {
        sendEmailVerification()
    }
    return (
        <div className='flex justify-center items-center'>
            <div className='w-1/4 mx-auto  shadow-lg p-5 rounded'>
            <p className='text-red-500'>Warning! You cannot access this page without email Verification. plsase verify your email and visit this page.</p>
            {
                sending ? 
                <button className='btn btn-accent btn-sm mt-5 loading capitalize'>sending</button> 
                : 
                <button onClick={sendEmail} className='btn btn-accent btn-sm mt-5 capitalize'>Send email again</button>
            }
             

            </div>
            
        </div>
    );
};

export default VerifyEmai;