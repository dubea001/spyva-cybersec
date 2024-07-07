import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AiOutlineClose } from 'react-icons/ai';
import ClipLoader from 'react-spinners/ClipLoader';

const RequestsPage = () => {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [modalImages, setModalImages] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);

    useEffect(() => {
        // Fetch requests from the backend
        const fetchRequests = async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_BACKEND_URL}/api/requests`
                );
                setRequests(response.data);
            } catch (err) {
                setError('There was an error fetching the requests');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchRequests();
    }, []);

    // delete a request
    const deleteRequest = async (id) => {
        try {
            await axios.delete(
                `${import.meta.env.VITE_BACKEND_URL}/api/requests/${id}`
            );
            setRequests(requests.filter((request) => request._id !== id));
        } catch (err) {
            console.error('There was an error deleting the request', err);
        }
    };

    const openImageModal = (images) => {
        setModalImages(images);
        setIsModalOpen(true);
    };

    const closeImageModal = () => {
        setIsModalOpen(false);
        setModalImages([]);
    };

    const openMessageModal = (message) => {
        setModalMessage(message);
        setIsMessageModalOpen(true);
    };

    const closeMessageModal = () => {
        setIsMessageModalOpen(false);
        setModalMessage('');
    };

    if (loading)
        return (
            <div className='flex items-center justify-center h-[80vh]'>
                <ClipLoader color='#0d3fcc' size={60} speedMultiplier={1} />
            </div>
        );
    if (error) return <div className='text-secondary'>{error}</div>;

    return (
        <div className='container mx-auto p-4'>
            <h1 className='text-center text-2xl font-bold text-primary mb-6'>
                Requests
            </h1>
            <div className='flex flex-col md:flex-row flex-wrap gap-8'>
                {requests.map((request) => (
                    <div
                        key={request._id}
                        className='border border-border min-w-80'
                    >
                        <p className='py-2 px-4'>
                            <strong>Name:</strong> {request.name}
                        </p>
                        <p className='py-2 px-4'>
                            <strong>Email:</strong> {request.email}
                        </p>
                        <p className='py-2 px-4'>
                            <strong>Country:</strong> {request.country}
                        </p>
                        <div className='py-2 px-4'>
                            <button
                                onClick={() =>
                                    openMessageModal(request.additionalMessage)
                                }
                                className='text-primary'
                            >
                                Message
                            </button>
                        </div>
                        <div className='py-2 px-4'>
                            <button
                                onClick={() => openImageModal(request.images)}
                                className='text-primary'
                            >
                                Images
                            </button>
                        </div>
                        <div className='py-2 px-4'>
                            <button
                                onClick={() => deleteRequest(request._id)}
                                className='bg-secondary-light sm:my-1 text-secondary-content py-1 px-2 rounded-lg hover:bg-secondary'
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            ;
            {isModalOpen && (
                <div className='fixed inset-0 flex items-center justify-center bg-copy-light bg-opacity-80'>
                    <div className='bg-background p-4 rounded shadow-lg max-w-3xl w-full mx-8 relative rounded-xl'>
                        <AiOutlineClose
                            onClick={closeImageModal}
                            className='mb-4 text-4xl -right-0 -top-10 absolute cursor-pointer bg-secondary-light text-secondary-content rounded-full p-2 hover:bg-background hover:text-secondary-light transition duration-300 ease-in-out'
                        />

                        <div className='flex flex-wrap items-center gap-2 justify-around bg-foreground px-8 py-6 w-full'>
                            {modalImages.map((image, index) => (
                                <a
                                    key={index}
                                    href={`${
                                        import.meta.env.VITE_BACKEND_URL
                                    }/${image}`}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <img
                                        src={`${
                                            import.meta.env.VITE_BACKEND_URL
                                        }/${image}`}
                                        alt={`uploaded-${index}`}
                                        className='w-40 cursor-pointer'
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}
            {isMessageModalOpen && (
                <div className='fixed inset-0 flex items-center justify-center bg-copy-light bg-opacity-80'>
                    <div className='bg-background p-4 relative rounded shadow-lg max-w-3xl w-full mx-8 rounded-xl'>
                        <AiOutlineClose
                            onClick={closeMessageModal}
                            className='mb-4 text-4xl -right-0 -top-10 absolute cursor-pointer bg-secondary-light text-secondary-content rounded-full p-2 hover:bg-background hover:text-secondary-light transition duration-300 ease-in-out'
                        />
                        <div className='text-[20px]'>{modalMessage}</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RequestsPage;
