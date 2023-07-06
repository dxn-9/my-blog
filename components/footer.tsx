import { Copyright } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
const Footer = () => {
	return (
		<footer className='border-t-input border-t bg-background-accent mt-2 min-h-[5rem] pt-5 pb-2'>
			<div className='flex flex-col max-w-[80ch] md:pl-16 pl-1 mx-auto text-sm'>
				<div>
					<p>Contattami sui social o via email:</p>
					<div className='flex gap-2 items-center flex-wrap'>
						<Link href='https://github.com/dandn9' target='_blank'>
							<Button
								className='p-0'
								name='github link'
								aria-label='github link'
								variant='link'>
								Github
							</Button>
						</Link>
						<Link href='mailto:daniel.lauri22@gmail.com' type='email'>
							<Button
								className='p-0'
								name='email link'
								aria-label='email link'
								variant='link'>
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
