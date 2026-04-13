import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import svg from '@poppanator/sveltekit-svg';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit(),
		svg({
			includePaths: ['./src/lib/icons/'],
		}),
		{
			name: 'vite-plugin-turbo-console',
			configureServer(server) {
				server.middlewares.use((req, res, next) => {
					const start = Date.now();

					res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
					res.setHeader('Pragma', 'no-cache');
					res.setHeader('Expires', '0');

					res.on('finish', () => {
						const url = req.url?.split('?')[0] || '';
						const status = res.statusCode;

						const hasExtension = /\.[a-z0-9]+$/i.test(url);
						const isInternal = url.includes('/@') || url.includes('/__') || url.includes('.svelte-kit');
						
						if (status < 400) {
							if (hasExtension || isInternal || url.includes('node_modules')) return;
						}

						const duration = Date.now() - start;
						
						const color = status >= 400 ? '\x1b[31m' : status >= 300 ? '\x1b[33m' : '\x1b[32m';
						const gray = '\x1b[90m';
						const bold = '\x1b[1m';
						const reset = '\x1b[0m';
						const symbol = status >= 400 ? '✘' : '✓';

						console.log(
							`${color}${bold}${symbol}${reset} ` +
							`${bold}${req.method}${reset} ` +
							`${url || '/'} ` +
							`${color}${status}${reset} ` +
							`${gray}in ${duration}ms${reset}`
						);
					});
					next();
				});
			}
		}
	],
});