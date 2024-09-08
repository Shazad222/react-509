// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleLogin = async () => {
//         try {
//             const response = await fetch('http://localhost:5000/login', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ username, password }),
//             });

//             if (response.ok) {
//                 // Handle successful login
//                 const result = await response.json();
//                 const userData = result.user; // Extract user data
//                 console.log('Login successful:', userData);
//                 // Store user info in local storage
//                 localStorage.setItem('user', JSON.stringify(userData));
//                 navigate('/home'); // Redirect to home page
//             } else {
//                 alert('Invalid credentials');
//             }
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     };

//     const goToSignup = () => {
//         navigate('/signup');
//     };

//     return (
//         <div>
//             <h2>Login</h2>
//             <button onClick={goToSignup}>Go to Signup</button>
//             <input
//                 type="text"
//                 placeholder="Username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//             />
//             <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//             />
//             <button onClick={handleLogin}>Login</button>
//         </div>
//     );
// }

// export default Login;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import "../styles/Login.css"; // Importing the CSS for styling

// function Login() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleLogin = async () => {
//         try {
//             const response = await fetch('http://localhost:5000/login', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ username, password }),
//             });

//             if (response.ok) {
//                 const result = await response.json();
//                 const userData = result.user;
//                 console.log('Login successful:', userData);
//                 localStorage.setItem('user', JSON.stringify(userData));
//                 navigate('/home');
//             } else {
//                 alert('Invalid credentials');
//             }
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     };

//     const goToSignup = () => {
//         navigate('/signup');
//     };

//     return (
//         <div className="login-container">
//             <h2>Login</h2>
//             <input
//                 type="text"
//                 className="login-input"
//                 placeholder="Username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//             />
//             <input
//                 type="password"
//                 className="login-input"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//             />
//             <button className="login-button" onClick={handleLogin}>Login</button>

//             <button className="signup-button" onClick={goToSignup}>Go to Signup</button>

//         </div>
//     );
// }

// export default Login;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Login.css"; // Importing the CSS for styling

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
                const result = await response.json();
                const userData = result.user;
                console.log('Login successful:', userData);
                localStorage.setItem('user', JSON.stringify(userData));
                navigate('/home');
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
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <input
                    type="text"
                    className="login-input"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    className="login-input"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="login-button" onClick={handleLogin}>Login</button>
                <button className="signup-button" onClick={goToSignup}>Go to Signup</button>
            </div>
        </div>
    );
}

export default Login;
