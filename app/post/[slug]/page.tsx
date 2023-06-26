import React from 'react'
import { getPostBySlug } from '@/utils/posts'
import x from '@/posts/hi.mdx'
import Link from 'next/link'
import PostHeading from '@/components/PostHeading'

export default async function Post({ params }: { params: { slug: string } }) {
	const Post = await getPostBySlug(params.slug)
	if (!Post) return <div>Post not found</div>

	return (
		<>
			<Link className='p-2 bg-gray-700 w-fit absolute bottom-full' href='/'>
				{'<'}Home
			</Link>
			<article className='lg:prose-lg prose prose-invert mx-auto w-full max-w-[80ch] '>
				<PostHeading post={Post} />
				<Post.default />
			</article>
		</>
	)
}
