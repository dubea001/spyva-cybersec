import React, { useEffect, useState } from 'react';

const ToggleTheme = () => {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    return (
        <div className='flex justify-end'>
            <button
                onClick={() => setDarkMode(!darkMode)}
                className='px-4 py-px border-2 font-DM bg-background dark:bg-darkmode-background font-medium rounded-full'
            >
                {darkMode ? 'Light' : 'Dark'} Mode
            </button>
        </div>
    );
};

export default ToggleTheme;
