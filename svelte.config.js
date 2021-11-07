import preprocess from 'svelte-preprocess';
import path from 'path';
import node from '@sveltejs/adapter-node';

const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: node({
			out: 'build'
		}),
		hostHeader: 'X-Forwarded-Host',
		floc: true,
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					$components: path.resolve('./src/components/'),
					$store: path.resolve('./src/store/index.ts'),
					$api: path.resolve('./src/routes/api/'),
					$models: path.resolve('./src/models/')
				}
			}
		}
	}
};

export default config;
