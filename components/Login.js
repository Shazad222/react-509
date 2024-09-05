import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        // Add your login logic here
        // For example, you might want to check if the credentials are valid
        if (username === 'user' && password === 'pass') {
            // Redirect to the dashboard or another route
            navigate('/dashboard');
        } else {
            // Handle login failure
            alert('Invalid credentials');
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
