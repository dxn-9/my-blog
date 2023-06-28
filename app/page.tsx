import { getPostBySlug, getPosts } from '@/lib/posts'
import { formatTitle, formatDateShort } from '@/lib/utils'
import Link from 'next/link'
import Container from '@/components/ui/container'
import { ExternalLink, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default async function Home() {
	const posts = await getPosts()
	return (
		<>
			<section className='mb-10'>
				<h2 className='font-bold text-4xl'>
					Ciao<span className='animate-wave'>👋🏼</span> mi chiamo Daniel e questo
					è il mio blog
				</h2>
				<p className='text-2xl mt-2 opacity-80'>
					Qui condividerò le mie esperienze da developer e tutto ciò che sto
					imparando!
				</p>
				<div className='flex justify-end mt-2 gap-4'>
					<Link href='https://daniel-lauri.dev'>
						<Button
							className='gap-1'
							size='sm'
							name='homepage link'
							aria-label='homepage link'
							variant='secondary'>
							Homepage <ExternalLink size={18} />
						</Button>
					</Link>
					<Link href='https://github.com/dandn9' target='_blank'>
						<Button
							className='gap-1'
							size='sm'
							name='github link'
							aria-label='github link'
							variant='secondary'>
							Github <Github size={18} />
						</Button>
					</Link>
				</div>
			</section>
			<section>
				<h1 className='font-bold text-4xl'>I miei ultimi posts</h1>
				<ul className='flex flex-col gap-2 mt-[31px]'>
					{posts.map((post) => (
						<li key={post.metaData.slug}>
							<Link href={`/post/${post.metaData.slug}`}>
								<Container
									className='justify-start bg-background-accent gap-3 hover:translate-x-2 hover:bg-accent hover:text-accent-foreground transition-all md:h-auto h-20  '
									padding='md'>
									<p className='opacity-40 md:text-base text-xs whitespace-nowrap'>
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
