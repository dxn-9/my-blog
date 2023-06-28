import Post from '@/types/post'
import { formatDateLong } from '@/lib/utils'
import React from 'react'
import Container from './ui/container'
export default function PostHeading({ post }: { post: Post }) {
	const hasBeenUpdated =
		post.metaData.updated && post.metaData.updated !== post.metaData.date

	return (
		<>
			{/* <Container variant='outline'> */}
			<h1>{post.metaData.title}</h1>
			<p>
				Scritto: {formatDateLong(post.metaData.date)}
				{hasBeenUpdated && (
					<> - Ultimo aggiornamento: {formatDateLong(post.metaData.date)}</>
				)}
			</p>
			{/* </Container> */}
		</>
	)
}
