import axios from 'axios';

const BASE_URL = '';

export const apiConfig = axios.create({
	baseURL: BASE_URL,
});
