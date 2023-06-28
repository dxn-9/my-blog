'use client'
import React, { useEffect, useId, useRef, useState } from 'react'
import { Home, Search } from 'lucide-react'
import SearchModal from './search-modal'
import { getPostsMeta } from '@/lib/posts'
import { cn } from '@/lib/utils'
import ThemeToggler from './theme-toggler'
import clsx from 'clsx'
import { Button } from './ui/button'
import { twJoin, twMerge } from 'tailwind-merge'
import { useRouter, usePathname } from 'next/navigation'

// todo - do some animations of opening/closing
export default function Navbar({
	postsMeta,
}: {
	postsMeta: Awaited<ReturnType<typeof getPostsMeta>>
}) {
	const [isOpen, setIsOpen] = useState(true)
	const prevScroll = useRef(0)
	const pathname = usePathname()
	console.log(pathname)

	useEffect(() => {
		if (!pathname.includes('post')) return
		const scrollListener = () => {
			if (window.scrollY < 100) {
				setIsOpen(true)
			} else {
				if (isOpen && window.scrollY < prevScroll.current) return
				setIsOpen(false)
			}
			prevScroll.current = window.scrollY
		}
		window.addEventListener('scroll', scrollListener)
		return () => {
			window.removeEventListener('scroll', scrollListener)
		}
	}, [isOpen, pathname])

	return (
		// <div className='absolute left-[-10%] '>
		<div className='absolute left-[-2rem]'>
			<aside className='w-16 mr-10 flex flex-col fixed   h-fit'>
				<nav
					data-state={isOpen ? 'open' : 'closed'}
					className={cn(
						'flex flex-col justify-start group items-start w-full transition-all   '
					)}>
					<button
						onClick={() => setIsOpen((p) => !p)}
						className='h-12 w-12 mx-auto relative bg-transparent after:content-[""] after:group-data-[state="open"]:rotate-45 after:group-data-[state="closed"]:rotate-0 after:absolute after:inset-0 after:bg-background after:border after:border-input after:hover:bg-accent after:hover:text-accent-foreground after:rounded-sm after:transition-all after:ring-offset-background after:focus-visible:outline-none'>
						<h2 className='z-10 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transition-all font-bold text-2xl'>
							DL
						</h2>
					</button>
					<ul className='flex flex-col items-center gap-4 mt-6 mx-auto overflow-x-hidden '>
						<li
							className={`group-data-[state="open"]:[--stagger:0s] group-data-[state="closed"]:[--stagger:80ms] group-data-[state="open"]:animate-spin-in-stagger transition-all  group-data-[state="closed"]:animate-spin-out-stagger`}>
							<SearchModal postsMeta={postsMeta} />
						</li>
						<li
							className={`group-data-[state="open"]:[--stagger:80ms] group-data-[state="closed"]:[--stagger:0ms] group-data-[state="open"]:animate-spin-in-stagger transition-all  group-data-[state="closed"]:animate-spin-out-stagger`}>
							<ThemeToggler />
						</li>
					</ul>
				</nav>
			</aside>
		</div>
	)
}
