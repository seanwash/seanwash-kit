import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	logLevel: 'info',
	plugins: [sveltekit()],
	server: {
		host: process.env.HOST || '0.0.0.0',
		port: process.env.PORT || 3000
	}
});
