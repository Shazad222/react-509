// src/controllers/userController.js
import { getUserData } from '../models/userModel';

export const fetchUserData = () => {
    return getUserData();
};
