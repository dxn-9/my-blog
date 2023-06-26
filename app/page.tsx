import { getPostBySlug, getPosts } from '@/utils/posts'
import { formatTitle, formatDateShort } from '@/utils/utils'
import Link from 'next/link'

export default async function Home() {
	const posts = await getPosts()
	const post = await getPostBySlug('hi')
	return (
		<>
			<h1 className='font-bold text-4xl'>I miei ultimi posts</h1>
			<section>
				<ul>
					{posts.map((post) => (
						<li key={post.metaData.slug}>
							<Link href={`/post/${post.metaData.slug}`}>
								<div className='p-4 bg-gray-700 m-4 flex gap-4'>
									<p className='opacity-50'>
										{formatDateShort(post.metaData.date)}
									</p>
									<h4>{formatTitle(post.metaData.title)}</h4>
								</div>
							</Link>
						</li>
					))}
				</ul>
			</section>
		</>
	)
}
