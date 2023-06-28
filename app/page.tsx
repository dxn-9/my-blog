import { getPostBySlug, getPosts } from '@/lib/posts'
import { formatTitle, formatDateShort } from '@/lib/utils'
import Link from 'next/link'
import Container from '@/components/ui/container'

export default async function Home() {
	const posts = await getPosts()
	return (
		<>
			<h1 className='font-bold text-4xl'>I miei ultimi posts</h1>

			<section>
				<ul className='flex flex-col gap-2 mt-[31px]'>
					{posts.map((post) => (
						<li key={post.metaData.slug}>
							<Link href={`/post/${post.metaData.slug}`}>
								<Container
									className='justify-start gap-3 hover:translate-x-2 hover:bg-accent hover:text-accent-foreground transition-all '
									padding='md'>
									<p className='opacity-40'>
										{formatDateShort(post.metaData.date)}
									</p>
									<h4>{formatTitle(post.metaData.title)}</h4>
								</Container>
							</Link>
						</li>
					))}
				</ul>
			</section>
		</>
	)
}
