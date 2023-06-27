'use client'
import React, { useState } from 'react'
import { Home, Search } from 'lucide-react'
import SearchModal from './search-modal'
import { getPostsMeta } from '@/lib/posts'
import { cn } from '@/lib/utils'
import ThemeToggler from './theme-toggler'
import clsx from 'clsx'
import { Button } from './ui/button'

// todo - do some animations of opening/closing
export default async function Navbar({
	postsMeta,
}: {
	postsMeta: Awaited<ReturnType<typeof getPostsMeta>>
}) {
	const [isOpen, setIsOpen] = useState(true)

	return (
		<aside className='w-10 mr-10'>
			<nav
				className={cn('flex flex-col justify-center w-full items-center ', {
					'h-40': isOpen,
				})}>
				<Button size='lg' variant='outline' onClick={() => setIsOpen(!isOpen)}>
					<h2 className='font-bold text-2xl'>DL</h2>
				</Button>
				<ul className='grid gap-4 mt-4'>
					<li>
						<SearchModal postsMeta={postsMeta} />
					</li>
					<li>
						<ThemeToggler />
					</li>
				</ul>
			</nav>
		</aside>
	)
}
