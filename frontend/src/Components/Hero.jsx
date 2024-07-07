import React from 'react';

const Hero = () => {
    return (
        <div className='font-DM md:flex'>
            <div className='text-start border border-primary-light dark:text-primary-content md:w-1/2'>
                <p>
                    PROFESSIONAL TOOL FOR <br /> CRYPTO TRADERS AND INVESTORS
                </p>
                <p>
                    This application is used to recover funds from crypto
                    wallets losts due to scams, blocking on malicious smart
                    contracts, loss from bots attacks, mistakenly transferring
                    funds to an incorrect or non-existent address
                </p>
                <button>START RECOVERY PROCESS</button>
                <button>Watch Demo Video</button>
            </div>
            <div className=''>
                <p className=''>Supported Wallet</p>
            </div>
        </div>
    );
};

export default Hero;
