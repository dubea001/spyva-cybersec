import React, { useState, useRef } from 'react';
import axios from 'axios';
import { FaCopy } from 'react-icons/fa6';

const GenerateIdPage = () => {
    const [newId, setNewId] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const emailInputRef = useRef(null);
    const idRef = useRef(null);

    const handleGenerateId = async () => {
        if (!newEmail) {
            setErrorMessage('Please enter an email');
            return;
        }

        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/api/ids/generate`,
                { email: newEmail }
            );
            const newGeneratedId = response.data.id;
            setNewId(newGeneratedId);
            setNewEmail('');
        } catch (error) {
            console.error('Error generating ID', error);
        }
    };

    const copyToClipboard = () => {
        if (idRef.current) {
            navigator.clipboard
                .writeText(idRef.current.textContent)
                .then(() => alert('ID copied to clipboard'))
                .catch((err) => console.error('Error copying text: ', err));
        }
        // setNewId('');
    };

    return (
        <div className='w-[90vw] px-4 m-auto'>
            <div className='flex flex-col md:gap-4 md:flex-row py-4 px-4 md:px-8'>
                <div className='mb-6 flex-1'>
                    <input
                        className='border border-border outline-1 outline-primary-light w-full px-4 py-3'
                        type='email'
                        placeholder="Enter user's email"
                        value={newEmail}
                        autoFocus
                        onChange={(e) => setNewEmail(e.target.value)}
                        ref={emailInputRef}
                    />
                    {errorMessage && (
                        <p className='text-secondary'>{errorMessage}</p>
                    )}
                </div>
                <div className='mb-6 flex-1 md:px-8 text-start'>
                    {' '}
                    <button
                        className='bg-primary-light w-full px-4 py-3 text-primary-content hover:bg-primary transition ease-in-out duration-300'
                        onClick={handleGenerateId}
                    >
                        Generate ID
                    </button>
                </div>
                <div className='mb-6 flex-1 flex items-center justify-center'>
                    {newId && (
                        <p
                            ref={idRef}
                            className='px-4 py-3 flex items-center justify-between bg-border w-full font-bold'
                        >
                            {newId}
                            <FaCopy
                                className='text-[1.5rem] cursor-pointer ml-8 hover:text-primary'
                                onClick={copyToClipboard}
                            />
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default GenerateIdPage;
