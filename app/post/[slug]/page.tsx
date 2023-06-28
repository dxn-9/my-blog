import React from 'react'
import { getPostBySlug, getPosts } from '@/lib/posts'
import Link from 'next/link'
import PostHeading from '@/components/post-heading'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export async function generateStaticParams() {
	const posts = await getPosts()
	return posts.map((post) => ({ slug: post.metaData.slug }))
}

export default async function Post({ params }: { params: { slug: string } }) {
	const Post = await getPostBySlug(params.slug)
	if (!Post) return <div>Post not found</div>

	return (
		<>
			<Link href='/'>
				<Button
					variant='link'
					name='back to home link'
					aria-label='back to home link'
					className='md:absolute bottom-full p-0 group flex items-center gap-[2px]'>
					<ArrowLeft
						size={14}
						className='group-hover:translate-x-[-2px] transition-all'
					/>
					<span>Home</span>
				</Button>
			</Link>
			<article className='prose dark:prose-invert w-full'>
				<PostHeading post={Post} />
				<Post.default />
			</article>
		</>
	)
}
