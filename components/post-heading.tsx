import Post from '@/types/post'
import { formatDateLong } from '@/lib/utils'
import React from 'react'
import Container from './ui/container'
export default function PostHeading({ post }: { post: Post }) {
	const hasBeenUpdated =
		post.metaData.updated && post.metaData.updated !== post.metaData.date

	return (
		<>
			<h1 className='my-0'>{post.metaData.title}</h1>
			<p className='my-1'>{formatDateLong(post.metaData.date)}</p>
			<hr className='mt-2' />
		</>
	)
}
