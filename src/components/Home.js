
// import React, { useEffect, useState } from 'react';
// import "../styles/Home.css"; // Add the correct path to your CSS file

// const Home = () => {
//     const [userData, setUserData] = useState(null);

//     useEffect(() => {
//         const storedUser = localStorage.getItem('user');
//         if (storedUser) {
//             setUserData(JSON.parse(storedUser));
//         }
//     }, []);

//     const handleLogout = () => {
//         localStorage.removeItem('user');
//         window.location.href = '/login';
//     };

//     return (
//         <div className="home-container">
//             <div className="profile-box">
//                 <h2 className="title">Home</h2>
//                 {userData ? (
//                     <div className="profile-content">
//                         <img src="profile-pic-placeholder.jpg" alt="Profile" className="profile-pic" />
//                         <p><strong>Name:</strong> {userData.username}</p>
//                         <p><strong>Email:</strong> {userData.email}</p>
//                         <p><strong>Phone Number:</strong> {userData.phone_number}</p>
//                         <p><strong>Gender:</strong> {userData.gender}</p>
//                         <button className="logout-button" onClick={handleLogout}>Logout</button>
//                     </div>
//                 ) : (
//                     <p>Loading...</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Home;

// import React, { useEffect, useState } from 'react';
// import "../styles/Home.css";

// const Home = () => {
//     const [userData, setUserData] = useState(null);

//     useEffect(() => {
//         const storedUser = localStorage.getItem('user');
//         if (storedUser) {
//             setUserData(JSON.parse(storedUser));
//         }
//     }, []);

//     const handleLogout = () => {
//         localStorage.removeItem('user');
//         window.location.href = '/login';
//     };

//     const handleUpload = () => {
//         alert('Upload button clicked');
//     };

//     return (
//         <div className="home-layout">
//             {/* Left Sidebar for User Data */}
//             <div className="sidebar">
//                 {userData ? (
//                     <div className="profile-info">
//                         <p><strong>Name:</strong> {userData.username}</p>
//                         <p><strong>Email:</strong> {userData.email}</p>
//                         <p><strong>Phone Number:</strong> {userData.phone_number}</p>
//                         <p><strong>Gender:</strong> {userData.gender}</p>
//                     </div>
//                 ) : (
//                     <p>Loading user data...</p>
//                 )}
//             </div>

//             {/* Main content for Upload Button */}
//             <div className="content">
//                 <button className="upload-button" onClick={handleUpload}>Upload File</button>
//             </div>

//             {/* Logout Button at the top-right */}
//             <button className="logout-button" onClick={handleLogout}>Logout</button>
//         </div>
//     );
// };

// export default Home;


import React, { useEffect, useState } from 'react';
import "../styles/Home.css";
import FileUpload from './FileUpload'; // Import the FileUpload component

const Home = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUserData(JSON.parse(storedUser));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user');
        window.location.href = '/login';
    };

    return (
        <div className="home-layout">
            {/* Left Sidebar for User Data */}
            <div className="sidebar">
                {userData ? (
                    <div className="profile-info">
                        <p><strong>Name:</strong> {userData.username}</p>
                        <p><strong>Email:</strong> {userData.email}</p>
                        <p><strong>Phone Number:</strong> {userData.phone_number}</p>
                        <p><strong>Gender:</strong> {userData.gender}</p>
                    </div>
                ) : (
                    <p>Loading user data...</p>
                )}
            </div>

            {/* Main content for File Upload */}
            <div className="content">
                <FileUpload /> {/* This is where the file upload will be rendered */}
            </div>

            {/* Logout Button at the top-right */}
            <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Home;
