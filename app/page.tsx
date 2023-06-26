import fs from 'node:fs/promises'
import { createReadStream } from 'node:fs'
import path from 'node:path'
import Hello from '@/posts/hello.mdx'
import { compile } from '@mdx-js/mdx'
import stream from 'node:stream'
import mdxLoader from '@mdx-js/loader'
import { getPosts } from '@/utils/posts'

export default async function Home() {
	const ff = await getPosts()
	return (
		<>
			{/* <ff. /> */}
			<h1 className='font-bold text-4xl'>Blog</h1>
			{/* {files} {__dirname} {__filename} {process.cwd()} */}
			{ff.map((post) => (
				<div key={post.metaData.title}>{post.metaData.title}</div>
			))}
			<section>
				<h3>Posts</h3>
				{/* <Hello /> */}
			</section>
		</>
	)
}
