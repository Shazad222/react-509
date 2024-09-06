// // src/controllers/userController.js
// import { getUserData } from '../models/userModel';

// export const fetchUserData = () => {
//     return getUserData();
// };

// src/controllers/userController.js
export const fetchUserData = async () => {
    try {
        const response = await fetch('http://localhost:5000/user', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}` // Use token if needed
            },
        });

        if (response.ok) {
            return await response.json();
        } else {
            throw new Error('Failed to fetch user data');
        }
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
};
