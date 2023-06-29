import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
const NotFound = () => {
	return (
		<section className='absolute left-[50%] top-[10%] translate-x-[-50%] '>
			<h1 className='text-lg font-bold'>404 - Not found</h1>
			<Link href='/'>
				<Button variant='link'>Torna alla home</Button>
			</Link>
		</section>
	)
}
export default NotFound
