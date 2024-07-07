import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import ToggleTheme from './Components/ToggleTheme';
// import Navbar from './Components/Navbar';
// import Hero from './Components/Hero';
import Login from './Components/Login';

const App = () => {
    const [validIds, setValidIds] = useState([]);

    useEffect(() => {
        const fetchValidIds = async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_BACKEND_URL}/api/ids`
                );
                const ids = response.data.map((idObj) => idObj.id);
                setValidIds(ids);
            } catch (error) {
                console.error('Error fetching valid IDs', error);
            }
        };

        fetchValidIds();
    }, []);

    const updateIds = (newId) => {
        setValidIds((prevIds) => [...prevIds, newId]);
    };
    return (
        <div className='px-4 bg-background text-copy dark:bg-darkmode-background dark:text-darkmode-copy min-h-screen'>
            {/* <ToggleTheme />
            <header className='p-4 bg-foreground dark:bg-darkmode-foreground border-b border-border dark:border-darkmode-border'>
                <Navbar />
            </header>
            <Hero /> */}

            <Login validIds={validIds} />
        </div>
    );
};

export default App;
