
// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                // Handle successful login
                const result = await response.json();
                console.log('Login successful:', result);
                // Store user info in local storage or state management
                localStorage.setItem('user', JSON.stringify(result));
                navigate('/home'); // Redirect to home page
            } else {
                alert('Invalid credentials');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const goToSignup = () => {
        navigate('/signup');
    };

    return (
        <div>
            <h2>Login</h2>
            <button onClick={goToSignup}>Go to Signup</button>
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
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;
