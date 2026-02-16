// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://guilletpatrick.fr',
	base: '/',
	trailingSlash: 'always',
	integrations: [
		starlight({
			title: 'Documentation',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			pagefind: true,
		}),
	],
});
