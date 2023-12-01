import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAuthStore = create()(
	persist(
		(set) => ({
			token: '',
			setToken: (token) => set(() => ({ token }))
		}),
		{ name: 'token' }
	)
);
