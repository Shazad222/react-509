// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import "../styles/Signup.css";

// const Signup = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [email, setEmail] = useState('');
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [gender, setGender] = useState('');
//     const navigate = useNavigate(); // Use useNavigate to get navigate function

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const userData = { username, password, email, phone_number: phoneNumber, gender };

//         try {
//             const response = await fetch('http://localhost:5000/signup', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(userData),
//             });

//             if (response.ok) {
//                 const result = await response.json();
//                 console.log('Signup successful:', result);
//             } else {
//                 console.error('Signup failed');
//             }
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     };

//     const gotoLogin = () => {
//         navigate('/login');
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <button className="link-button" type="button" onClick={gotoLogin}>Go to Login</button> {/* Use type="button" to prevent form submission */}
//             <input
//                 type="text"
//                 placeholder="Username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 required
//             />
//             <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//             />
//             <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//             />
//             <input
//                 type="text"
//                 placeholder="Phone Number"
//                 value={phoneNumber}
//                 onChange={(e) => setPhoneNumber(e.target.value)}
//             />
//             <input
//                 type="text"
//                 placeholder="Gender"
//                 value={gender}
//                 onChange={(e) => setGender(e.target.value)}
//             />
//             <button type="submit">Sign Up</button>
//         </form>
//     );
// };

// export default Signup;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Signup.css";

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [gender, setGender] = useState('');
    const [message, setMessage] = useState(''); // State to hold success or failure message
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = { username, password, email, phone_number: phoneNumber, gender };

        try {
            const response = await fetch('http://localhost:5000/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Signup successful:', result);

                // Show success message
                setMessage('Signup successful! Redirecting to login...');

                // Redirect to login after 2 seconds
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
            } else {
                setMessage('Signup failed. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('Error occurred during signup. Please try again.');
        }
    };

    const gotoLogin = () => {
        navigate('/login');
    };

    return (
        <div className="signup-container">
            <form onSubmit={handleSubmit}>
                <button className="link-button" type="button" onClick={gotoLogin}>Go to Login</button>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                />
                <button type="submit">Sign Up</button>
            </form>

            {/* Display the message below the form */}
            {message && <p className="message">{message}</p>}
        </div>
    );
};

export default Signup;

