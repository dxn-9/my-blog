import React from 'react'
import { getPostBySlug, getPosts } from '@/lib/posts'
import Link from 'next/link'
import PostHeading from '@/components/post-heading'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
	const posts = await getPosts()
	return posts.map((post) => ({ slug: post.metaData.slug }))
}

export async function generateMetadata(
	{ params }: { params: { slug: string } },
	parent: ResolvingMetadata
) {
	const post = await getPostBySlug(params.slug)
	return {
		title: post?.metaData.title,
	}
}

export default async function Post({ params }: { params: { slug: string } }) {
	const Post = await getPostBySlug(params.slug)
	if (!Post) {
		notFound()
	}
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
