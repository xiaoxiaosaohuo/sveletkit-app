import preprocess from 'svelte-preprocess';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
// import tailwindcss from 'tailwindcss';
// import pxtorem from 'postcss-pxtorem';
// import autoprefixer from 'autoprefixer';
const dirName = dirname(fileURLToPath(import.meta.url));
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			// optimizeDeps: {
			// 	include: ['@smartnews/isomorphic-uhtml']
			// },
			resolve: {
				alias: {
					$components: resolve(dirName, './src/components'),
					$utils: resolve(dirName, './src/utils'),
					$static: resolve(dirName, './static'),
					$types: resolve(dirName, './src/types')
				}
			}
		}
	}
};

export default config;
