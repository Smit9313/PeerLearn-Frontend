import api from '../config';

export const userService = {
	getUser: async () => {
		const response = await api.get('/api/users/me');
		return response.data;
	}
}