// src/App.jsx
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import RequestsPage from './pages/RequestsPage';
import ManageIdPage from './pages/ManageIdPage';
import GenerateIdPage from './pages/GenerateIdPage';
import PasswordPopup from './components/PasswordPopup';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD;

    const handlePasswordSubmit = (password) => {
        if (password === adminPassword) {
            setIsAuthenticated(true);
            return true;
        } else {
            return false;
        }
    };

    if (!isAuthenticated) {
        return <PasswordPopup onSubmit={handlePasswordSubmit} />;
    }

    return (
        <div className='font-Nunito'>
            <Navbar />
            <div>
                <Routes>
                    <Route path='/' element={<RequestsPage />} />
                    <Route path='/requestsPage' element={<RequestsPage />} />
                    <Route
                        path='/manageIdPage'
                        element={<ManageIdPage validIds={[]} />}
                    />
                    <Route
                        path='/generateIdPage'
                        element={<GenerateIdPage />}
                    />
                </Routes>
            </div>
        </div>
    );
};

export default App;

// import React, { useEffect } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import RequestsPage from './pages/RequestsPage';
// import ManageIdPage from './pages/ManageIdPage';
// import GenerateIdPage from './pages/GenerateIdPage';

// const App = () => {
//     useEffect(() => {
//         const password = prompt('Enter admin password:');
//         const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD;
//         if (password !== adminPassword) {
//             alert('Wrong Password');
//             window.location.href = '/';
//         }
//     }, []);

//     return (
//         <div className='font-outfit'>
//             <Navbar />
//             <div className=''>
//                 <Routes>
//                     <Route path='/requestsPage' element={<RequestsPage />} />
//                     <Route
//                         path='/manageIdPage'
//                         element={<ManageIdPage validIds={[]} />}
//                     />
//                     <Route
//                         path='/generateIdPage'
//                         element={<GenerateIdPage />}
//                     />
//                 </Routes>
//             </div>
//         </div>
//     );
// };

// export default App;
