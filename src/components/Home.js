import React, { useEffect, useState } from 'react';

const Home = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Get user data from localStorage
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
        <div className="home-container">
            <h2>Home</h2>
            {userData ? (
                <div>
                    <img src="profile-pic-placeholder.jpg" alt="Profile" className="profile-pic" />
                    <p>Name: {userData.username}</p>
                    <p>Email: {userData.email}</p>
                    <p>Phone Number: {userData.phone_number}</p>
                    <p>Gender: {userData.gender}</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Home;
