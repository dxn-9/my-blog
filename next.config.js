/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
}

const withMDX = require('@next/mdx')({
	options: {
		rehypePlugins: [
			[
				require('rehype-pretty-code'),
				{
					theme: { dark: 'github-dark-dimmed', light: 'github-light' },
				},
			],
		],
	},
})

// import x from 'rehype-pretty-code'
// x({})
module.exports = withMDX(nextConfig)
