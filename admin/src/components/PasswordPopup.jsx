import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const PasswordPopup = ({ onSubmit }) => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isSuccess = onSubmit(password);
        if (!isSuccess) {
            setError('Password is incorrect');
        }
    };

    const toggleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    return (
        <div className='fixed inset-0 flex items-center justify-center bg-darkmode-background bg-opacity-75'>
            <div className='bg-foreground p-8 rounded-lg shadow-lg flex flex-col justify-center'>
                <h2 className='text-2xl mb-4 text-primary font-semibold'>
                    Enter Admin Password
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className='relative mb-4'>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={handlePasswordChange}
                            className='border border-primary p-2 w-full'
                            placeholder='Enter password'
                        />
                        <span
                            className='absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer text-copy-light'
                            onClick={toggleShowPassword}
                        >
                            <FontAwesomeIcon
                                icon={showPassword ? faEyeSlash : faEye}
                            />
                        </span>
                    </div>
                    {error && <span className='text-error'>{error}</span>}{' '}
                    <br />
                    <button
                        type='submit'
                        className='bg-primary hover:bg-primary-dark text-primary-content py-2 px-12 rounded-lg'
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PasswordPopup;
