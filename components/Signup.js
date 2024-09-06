// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import "../styles/Signup.css"
// const Signup = () => {
//     const navigate = useNavigate();
//     const [formData, setFormData] = useState({
//         username: '',
//         email: '',
//         password: '',
//         phoneNumber: '',
//         gender: ''
//     });
//     const [errors, setErrors] = useState({});

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Basic validation
//         const { username, password } = formData;
//         let validationErrors = {};

//         if (!username) validationErrors.username = 'Username is required';
//         if (!password) validationErrors.password = 'Password is required';

//         if (Object.keys(validationErrors).length > 0) {
//             setErrors(validationErrors);
//             return;
//         }

//         // Proceed with form submission (e.g., send data to the server)
//         console.log('Form data submitted:', formData);
//         // Navigate to the login page or handle success
//         navigate('/login');
//     };

//     const goToLogin = () => {
//         navigate('/login');
//     };

//     return (
//         <div className="signup-container">
//             <h1>Signup Page</h1>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="username">Username:</label>
//                     <input
//                         type="text"
//                         id="username"
//                         name="username"
//                         value={formData.username}
//                         onChange={handleChange}
//                         required
//                     />
//                     {errors.username && <p>{errors.username}</p>}
//                 </div>

//                 <div>
//                     <label htmlFor="email">Email:</label>
//                     <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                     />
//                 </div>

//                 <div>
//                     <label htmlFor="password">Password:</label>
//                     <input
//                         type="password"
//                         id="password"
//                         name="password"
//                         value={formData.password}
//                         onChange={handleChange}
//                         required
//                     />
//                     {errors.password && <p>{errors.password}</p>}
//                 </div>

//                 <div>
//                     <label htmlFor="phoneNumber">Phone Number:</label>
//                     <input
//                         type="tel"
//                         id="phoneNumber"
//                         name="phoneNumber"
//                         value={formData.phoneNumber}
//                         onChange={handleChange}
//                     />
//                 </div>

//                 <div>
//                     <label htmlFor="gender">Gender:</label>
//                     <select
//                         id="gender"
//                         name="gender"
//                         value={formData.gender}
//                         onChange={handleChange}
//                     >
//                         <option value="">Select Gender</option>
//                         <option value="male">Male</option>
//                         <option value="female">Female</option>
//                         <option value="other">Other</option>
//                     </select>
//                 </div>

//                 <button type="submit">Sign Up</button>
//             </form>
//             <button className="link-button" onClick={goToLogin}>Go to Login</button>
//         </div>
//     );
// };

// export default Signup;


import React, { useState } from 'react';
import "../styles/Signup.css";

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [gender, setGender] = useState('');

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
            } else {
                console.error('Signup failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
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
    );
};

export default Signup;
