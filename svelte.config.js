import adapter from '@sveltejs/adapter-auto';
import sveltePreprocess from 'svelte-preprocess';
import * as sass from 'sass';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter()
    },
    preprocess: sveltePreprocess({
        sass: {
            sync: true,
            implementation: sass,
        }
    }),
};

export default config;
