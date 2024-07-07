import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const ManageId = ({ validIds = [] }) => {
    const [allIds, setAllIds] = useState(validIds);

    const fetchAllIds = async () => {
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_BACKEND_URL}/api/ids`
            );
            setAllIds(response.data);
        } catch (error) {
            console.error('Error fetching IDs', error);
        }
    };

    const handleDeleteId = async (id) => {
        try {
            await axios.delete(
                `${import.meta.env.VITE_BACKEND_URL}/api/ids/${id}`
            );
            fetchAllIds();
        } catch (error) {
            console.error('Error deleting ID', error);
        }
    };

    useEffect(() => {
        fetchAllIds();
    }, []);

    return (
        <div className='w-[90vw] px-4 m-auto'>
            {allIds.length > 0 ? (
                <table className='w-full border-collapse mt-4 bg-background'>
                    <thead>
                        <tr>
                            <th className='border border-copy p-2'>Email</th>
                            <th className='border border-copy p-2 hidden md:table-cell'>
                                ID
                            </th>
                            <th className='border border-copy p-2'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allIds.map((idObj) => (
                            <tr key={idObj.id} className='text-center'>
                                <td className='border border-copy p-2'>
                                    {idObj.email}
                                </td>
                                <td className='border border-copy p-2 hidden md:table-cell'>
                                    {idObj.id}
                                </td>

                                <td className='border border-copy p-2'>
                                    <button
                                        onClick={() => handleDeleteId(idObj.id)}
                                        className='text-secondary-light'
                                    >
                                        Delete ID
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className='text-center mt-6'>No IDs available</p>
            )}
        </div>
    );
};

ManageId.propTypes = {
    validIds: PropTypes.array.isRequired,
};

export default ManageId;
