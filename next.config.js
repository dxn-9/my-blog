/** @type {import('next').NextConfig} */
const nextConfig = {
	// experimental: {
	// 	 mdxRs: true,
	// },
}

const withMDX = require('@next/mdx')({
	options: {
		rehypePlugins: [
			[
				require('rehype-pretty-code'),
				{
					dark: 'github-dark-dimmed',
					light: 'github-light',
				},
			],
		],
	},
})
module.exports = withMDX(nextConfig)
