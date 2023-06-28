import { Copyright } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
const Footer = () => {
	return (
		<footer className='border-t-input border-t bg-background-accent mt-2 min-h-[5rem] pt-5 pb-2'>
			<div className='flex flex-col max-w-[80ch] pl-16 mx-auto text-sm'>
				<div>
					<p>Contattami sui social o via email:</p>
					<div className='flex gap-2 items-center'>
						<Link href='https://twitter.com/dotdaxxn' target='_blank'>
							<Button className='p-0' variant='link'>
								Twitter
							</Button>
						</Link>
						<Link href='https://github.com/dandn9' target='_blank'>
							<Button className='p-0' variant='link'>
								Github
							</Button>
						</Link>
						<Link
							href='https://www.linkedin.com/in/daniel-lauri-0b170a240/'
							target='_blank'>
							<Button className='p-0' variant='link'>
								LinkedIn
							</Button>
						</Link>
						<Link href='mailto:daniel.lauri22@gmail.com' type='email'>
							<Button className='p-0' variant='link'>
								daniel.lauri22@gmail.com
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}
export default Footer
