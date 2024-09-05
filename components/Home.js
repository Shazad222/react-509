// src/components/Home.js
import React, { useEffect, useState } from 'react';
import { fetchUserData } from '../controllers/userController';

const Home = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const data = fetchUserData();
        setUserData(data);
    }, []);

    const handleLogout = () => {
        // Redirect to login page
        window.location.href = '/login';
    };

    const handleUpload = () => {
        alert('Upload button clicked');
    };

    return (
        <div className="home-container">
            <h2>Home</h2>
            {userData ? (
                <div>
                    <img src="profile-pic-placeholder.jpg" alt="Profile" className="profile-pic" />
                    <p>Name: {userData.name}</p>
                    <p>Email: {userData.email}</p>
                    <button onClick={handleLogout}>Logout</button>
                    <button onClick={handleUpload} className="upload-button">Upload</button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Home;
