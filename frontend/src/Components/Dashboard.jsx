// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

const Dashboard = () => {
    return (
        <div className='w-[90vw] px-4'>
            <div className=''>Welcome to your dashboard</div>
        </div>
    );
};

export default Dashboard;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Dashboard = ({ userId }) => {
//     const [userStatus, setUserStatus] = useState('');

//     const fetchUserStatus = async () => {
//         try {
//             const response = await axios.get(
//                 `${import.meta.env.VITE_BACKEND_URL}/api/ids/${userId}`
//             );
//             setUserStatus(response.data.status);
//         } catch (error) {
//             console.error('Error fetching user status', error);
//         }
//     };

//     useEffect(() => {
//         fetchUserStatus();
//     }, []);

//     const getStatusColor = (status) => {
//         switch (status) {
//             case 'pending':
//                 return 'pending';
//             case 'on its way':
//                 return 'On Route';
//             case 'delivered':
//                 return 'Delivered';
//             default:
//                 return 'dont know about this';
//         }
//     };

//     return (
//         <div className='w-[90vw] px-4'>
//             <div className={`p-4 text-white ${getStatusColor(userStatus)}`}>
//                 Status: {getStatusColor(userStatus)}
//             </div>
//         </div>
//     );
// };

// export default Dashboard;
