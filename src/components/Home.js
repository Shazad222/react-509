import React, { useEffect, useState } from 'react';
import "../styles/Home.css";
import FileUpload from './FileUpload'; // Import the FileUpload component
import FileList from './FileList'; // Import the FileList component

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
                <FileList /> {/* This will display the uploaded files */}
            </div>

            {/* Logout Button at the top-right */}
            <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Home;
