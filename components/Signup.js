import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = async () => {
        // Add your signup logic here
        // For example, you might want to create a new user
        if (username && password) {
            // Redirect to a welcome or another route
            navigate('/welcome');
        } else {
            // Handle signup failure
            alert('Please enter a username and password');
        }
    };
    const goToLogin = () => {
        navigate('/login');
    };

    return (
        <div>
            <h2>Signup</h2>
            <button onClick={goToLogin}>Go to Signup</button>

            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSignup}>Sign Up</button>
        </div>
    );
}

export default Signup;
