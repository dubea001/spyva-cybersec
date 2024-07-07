import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import App from './App.jsx';
import './index.css';
import Dashboard from './Components/Dashboard.jsx';

const Main = () => {
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

    const router = createBrowserRouter([
        {
            path: '/',
            element: <App validIds={validIds} />,
        },
        {
            path: '/dashboard',
            element: <Dashboard />,
        },
    ]);

    return <RouterProvider router={router} />;
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>
);
