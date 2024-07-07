import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import Form from '../Subcomponent/Form';

const Login = ({ validIds }) => {
    const [isRequestingId, setIsRequestingId] = useState(false);
    const [enteredId, setEnteredId] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        if (validIds.includes(enteredId)) {
            navigate('/dashboard');
        } else {
            setError('Invalid ID');
        }
    };

    return (
        <div className='flex flex-col items-center bg-border py-8 font-Raleway'>
            <img src={assets.logo} alt='spyva logo' className='w-16 mb-6' />
            <div className='text-center bg-foreground py-8 px-6 rounded-lg'>
                {!isRequestingId ? (
                    <form onSubmit={handleLoginSubmit}>
                        <h2 className='text-primary font-semibold mb-4'>
                            LOGIN
                        </h2>
                        <input
                            type='text'
                            placeholder='Enter ID to access tool'
                            value={enteredId}
                            onChange={(e) => setEnteredId(e.target.value)}
                            className='w-80 outline-primary-light p-2 mb-2 outline-1 border border-border'
                            required
                        />
                        <br />
                        {error && (
                            <span className='text-error text-start'>
                                {error}
                            </span>
                        )}{' '}
                        <br />
                        <button
                            type='submit'
                            className='w-80 bg-primary-light text-primary-content font-semibold px-16 py-2 my-3 hover:bg-primary transition duration-300'
                        >
                            Continue
                        </button>
                        <br />
                        <p className='text-sm'>
                            Don't have an ID?
                            <span
                                className='cursor-pointer text-primary ml-2'
                                onClick={() => setIsRequestingId(true)}
                            >
                                Request Access
                            </span>
                        </p>
                    </form>
                ) : (
                    <div className=''>
                        <Form />
                        <p className='text-sm'>
                            Already have an ID?
                            <span
                                className='cursor-pointer text-primary ml-2'
                                onClick={() => setIsRequestingId(false)}
                            >
                                Access Tool
                            </span>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Login;
