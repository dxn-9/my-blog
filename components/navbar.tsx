import React from 'react'
import { Home, Search } from 'lucide-react'
import SearchModal from './search-modal'
import { getPostsMeta } from '@/lib/posts'
import ThemeToggler from './theme-toggler'

// todo - do some animations of opening/closing
export default async function Navbar() {
	const postsMeta = await getPostsMeta()
	return (
		<aside className='w-20'>
			<h2 className='font-bold text-2xl'>DL</h2>
			<nav>
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
