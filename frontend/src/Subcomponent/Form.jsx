import React, { useState, useRef } from 'react';
import axios from 'axios';
import SelectCountry from './SelectCountry';
import { assets } from '../assets/assets';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaInfoCircle } from 'react-icons/fa';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        country: '',
        additionalMessage: '',
        images: [],
    });
    const [imagePreviews, setImagePreviews] = useState([]);
    const fileInputRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setFormData({
            ...formData,
            images: files,
        });
        const previewUrls = files.map((file) => URL.createObjectURL(file));
        setImagePreviews(previewUrls);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('name', formData.name);
        data.append('email', formData.email);
        data.append('country', formData.country);
        data.append('additionalMessage', formData.additionalMessage);
        formData.images.forEach((image) => {
            data.append('images', image);
        });

        try {
            await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/api/requests`,
                data,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );
            toast.success('Request sent successfully');
            setFormData({
                name: '',
                email: '',
                country: '',
                additionalMessage: '',
                images: [],
            });
            setImagePreviews([]);
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
        } catch (error) {
            console.error('There was an error sending the request', error);
        }
    };

    const handleImageClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 className='text-primary font-semibold mb-4'>REQUEST ID</h2>
            <div className='flex items-center justify-center text-primary mb-4 text-[14px]'>
                <p>
                    <strong>Note:</strong> All fields are required.
                </p>
            </div>
            <input
                type='text'
                name='name'
                placeholder='Name'
                value={formData.name}
                onChange={handleChange}
                className='w-80 outline-primary-light p-2 mb-4 outline-1 border border-border'
                required
            />{' '}
            <br />
            <input
                type='email'
                name='email'
                placeholder='Email'
                value={formData.email}
                onChange={handleChange}
                className='w-80 outline-primary-light p-2 mb-4 outline-1 border border-border'
                required
            />{' '}
            <br />
            <SelectCountry
                value={formData.country}
                onChange={handleChange}
            />{' '}
            <br />
            <div className='flex flex-col items-center justify-center w-80 m-auto border border-border pt-4 pb-2 mb-4 px-2'>
                <label htmlFor='image' onClick={handleImageClick}>
                    {imagePreviews.length > 0 ? (
                        <div className='w-80 flex flex-wrap gap-2'>
                            {imagePreviews.map((src, index) => (
                                <img
                                    key={index}
                                    src={src}
                                    alt={`Preview ${index + 1}`}
                                    className='w-24 h-24 object-cover border border-gray-300 rounded'
                                />
                            ))}
                            <p>{imagePreviews.length} image(s) selected</p>
                        </div>
                    ) : (
                        <div className='text-center flex flex-col items-center justify-center'>
                            <img
                                src={assets.upload}
                                alt='Upload'
                                className='mb-4 cursor-pointer w-32'
                            />
                            <p className='text-[12px]'>
                                Upload Images or relevant documents
                            </p>
                        </div>
                    )}
                </label>
                <input
                    type='file'
                    id='fileInput'
                    name='images'
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    multiple
                    required
                    className='hidden'
                />{' '}
            </div>
            <br />
            <textarea
                name='additionalMessage'
                placeholder='Add any additional message for our experts'
                value={formData.additionalMessage}
                onChange={handleChange}
                className='w-80 h-32 outline-primary-light p-2 mb-4 outline-1 border border-border'
                required
            />{' '}
            <br />
            <div className='text-start w-80 text-primary text-[14px] mb-4'>
                After requesting access a review will be conducted to conclude
                eligibility. <br /> 15 to 30 minutes you will receive an email
                with an update
            </div>
            <button
                type='submit'
                className='w-80 bg-primary-light text-primary-content font-semibold px-16 py-2 mb-4 hover:bg-primary transition duration-300'
            >
                Request ID
            </button>
            <ToastContainer />
        </form>
    );
};

export default Form;

// import React, { useState } from 'react';
// import axios from 'axios';
// import SelectCountry from './SelectCountry';
// import { assets } from '../assets/assets';

// const Form = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         country: '',
//         additionalMessage: '',
//         images: [],
//     });
//     const [imagePreviews, setImagePreviews] = useState([]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     const handleFileChange = (e) => {
//         const files = Array.from(e.target.files);
//         setFormData({
//             ...formData,
//             images: files,
//         });
//         const previewUrls = files.map((file) => URL.createObjectURL(file));
//         setImagePreviews(previewUrls);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const data = new FormData();
//         data.append('name', formData.name);
//         data.append('email', formData.email);
//         data.append('country', formData.country);
//         data.append('additionalMessage', formData.additionalMessage);
//         formData.images.forEach((image) => {
//             data.append('images', image);
//         });

//         try {
//             await axios.post(
//                 `${import.meta.env.VITE_BACKEND_URL}/api/requests`,
//                 data,
//                 {
//                     headers: {
//                         'Content-Type': 'multipart/form-data',
//                     },
//                 }
//             );
//             alert('Request sent successfully');
//         } catch (error) {
//             console.error('There was an error sending the request', error);
//         }
//     };

//     const handleImageClick = () => {
//         document.getElementById('fileInput').click();
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type='text'
//                 name='name'
//                 placeholder='Name'
//                 onChange={handleChange}
//                 className='w-80 outline-primary-light px-6 py-1 rounded mb-6 outline-1'
//                 required
//             />{' '}
//             <br />
//             <input
//                 type='email'
//                 name='email'
//                 placeholder='Email'
//                 onChange={handleChange}
//                 className='w-80 outline-primary-light px-6 py-1 rounded mb-6 outline-1'
//                 required
//             />{' '}
//             <br />
//             <SelectCountry
//                 value={formData.country}
//                 onChange={handleChange}
//             />{' '}
//             <br />
//             <div className='flex flex-col items-center justify-center'>
//                 <p>Upload Images</p>
//                 <label htmlFor='image' onClick={handleImageClick}>
//                     {imagePreviews.length > 0 ? (
//                         <div className='w-80 flex flex-wrap gap-2'>
//                             {imagePreviews.map((src, index) => (
//                                 <img
//                                     key={index}
//                                     src={src}
//                                     alt={`Preview ${index + 1}`}
//                                     className='w-24 h-24 object-cover border border-gray-300 rounded'
//                                 />
//                             ))}
//                             <p>{imagePreviews.length} image(s) selected</p>
//                         </div>
//                     ) : (
//                         <img
//                             src={assets.upload}
//                             alt='Upload'
//                             className='cursor-pointer'
//                         />
//                     )}
//                 </label>
//                 <input
//                     type='file'
//                     id='fileInput'
//                     name='images'
//                     onChange={handleFileChange}
//                     multiple
//                     required
//                     className='hidden'
//                 />{' '}
//             </div>
//             <br />
//             <textarea
//                 name='additionalMessage'
//                 placeholder='Add any additional message'
//                 onChange={handleChange}
//                 className='w-80 outline-primary-light px-6 py-1 rounded mb-6 outline-1'
//             />{' '}
//             <br />
//             <button
//                 type='submit'
//                 className='w-full bg-primary-light text-primary-content font-semibold px-16 py-1 rounded mb-6'
//             >
//                 Request ID
//             </button>
//         </form>
//     );
// };

// export default Form;
