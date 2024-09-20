import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Link from 'next/link';

export default function VerifyEmailPage() {
    const [token, setToken] = useState('');
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState(false);

    const verifyUserEmail = async() => {
        try {
            await axios.post('/api/users/verifyemail', {token});
            setVerified(true);
        } catch (e: any) {
            console.log(e.response.data);
        }
    };

    useEffect(() => {
        const urlToken = window.location.search.split('=')[1];
        setToken(urlToken || '');
    }, []);

    useEffect(() => {
        if(token.length > 0) { verifyUserEmail(); }
    }, [token]);
   
    return(
        <div>
            <h1 className='text-4xl text-sblack font-poppins font-semibold'>Verify Email</h1>
            <h2 className='text-sm font-poppins font-normal text-swhite bg-sred p-1'>{token ? `${token}` : "No token"}</h2>
            {verified && (
                <div>
                    <h2 className='text-2xl font-poppins font-semibold text-sblack'>Email Verified</h2>
                    <Link href='/login' className='text-sorange font-medium font-poppins text-sm'>Login</Link>
                </div>
            )}

            {error && (
                <div>
                    <h2 className='text-2xl font-poppins font-semibold text-sblack'>Error verifying email</h2>
                </div>
            )}
        </div>
    );
    
}