import React from 'react'
import { Home } from 'lucide-react'

// todo - do some animations of opening/closing
export default function Navbar() {
	return (
		<aside className='w-20'>
			<h2 className='font-bold text-2xl'>DL</h2>
			<nav>
				<ul>
					<li>
						<Home />
					</li>
					{/* <li>Clicker2</li> */}
				</ul>
			</nav>
		</aside>
	)
}
