import axios from 'axios';

import { useAuthStore } from '../stores/authStore';
import { config } from './config';

/**
 * Creating axios instance with required configuration like
 * baseURL
 * timeout
 * headers
 */
const axiosInstance = axios.create({
	baseURL: config.url,
	withCredentials: false,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
	}
});

// eslint-disable-next-line react-hooks/rules-of-hooks
const token = useAuthStore((state) => state.token);

axiosInstance.interceptors.request.use((config) => {
	config.headers.Authorization = `Bearer ${token}`;

	return config;
});

export default axiosInstance;
