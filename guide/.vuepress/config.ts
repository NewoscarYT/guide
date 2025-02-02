import path from 'path';
import { defineUserConfig } from 'vuepress-vite';
import type { DefaultThemeOptions, ViteBundlerOptions } from 'vuepress-vite';
import sidebar from './sidebar';

const config = defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
	bundler: '@vuepress/vite',
	templateDev: path.join(__dirname, 'templates', 'index.dev.html'),
	templateSSR: path.join(__dirname, 'templates', 'index.ssr.html'),
	lang: 'es-XL',
	title: 'Guía de discord.js',
	description: 'La guía oficial de discord.js traducida a español.',
	head: [
		['meta', { charset: 'utf-8' }],
		['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
		['link', { rel: 'icon', href: '/favicon.png' }],
		['meta', { name: 'theme-color', content: '#3eaf7c' }],
		['meta', { name: 'twitter:card', content: 'summary' }],
		['meta', { property: 'og:title', content: 'Guía de discord.js' }],
		['meta', { property: 'og:description', content: 'La guía oficial de discord.js traducida a español.' }],
		['meta', { property: 'og:type', content: 'website' }],
		['meta', { property: 'og:url', content: 'https://guia.palta.ml/' }],
		['meta', { property: 'og:locale', content: 'es_XL' }],
		['meta', { property: 'og:image', content: 'https://guia.palta.ml/metaimg.png' }],
	],
	theme: path.join(__dirname, 'theme', 'index.ts'),
	themeConfig: {
		contributors: false,
		sidebar,
		repo: 'Awoocado/guide',
		docsDir: 'guide',
		sidebarDepth: 3,
		editLinks: true,
		editLinkText: 'Editar esta página',
		lastUpdated: 'Última actualización',
		navbar: [
			{
				text: 'Voz',
				link: '/voz/',
			},
			{
				text: 'Extras',
				link: '/extras/',
			},
			{
				text: 'Documentación',
				link: 'https://discord.js.org/#/docs/main/stable/general/welcome',
			},
		],
		themePlugins: {
			mediumZoom: false,
		},
	},
	plugins: [],
});

/*
if (process.env.NODE_ENV === 'production') {
	config.plugins.push(
		[
			'@vuepress/plugin-docsearch',
			{
				apiKey: process.env.ALGOLIA_DOCSEARCH_API_KEY,
				indexName: 'discordjs',
				placeholder: 'Search guide',
			},
		],
	);
}
*/

export default config;
