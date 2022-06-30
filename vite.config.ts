import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';
import tsconfig from 'vite-tsconfig-paths';
// @ts-ignore
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		eslintPlugin({ cache: false }),
		svgr({
			svgrOptions: {
				icon: false,
			},
		}),
		tsconfig(),
	],
	base: '',
	build: {
		outDir: 'build',
	},
});
