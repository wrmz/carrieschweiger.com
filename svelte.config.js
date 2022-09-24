import adapter from '@sveltejs/adapter-netlify';
import sveltePreprocess from 'svelte-preprocess';
import * as sass from 'sass';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			edge: false,
			split: true
		})
	},
	preprocess: sveltePreprocess({
		sass: {
			sync: true,
			implementation: sass
		}
	})
};

export default config;
