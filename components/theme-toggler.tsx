'use client'

import { useTheme } from 'next-themes'
import React from 'react'
import { MoonStar, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
export default function ThemeToggler() {
	const { setTheme, theme } = useTheme()
	return (
		<>
			<Button
				variant='outline'
				size='icon'
				className='relative z-10'
				onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
				<MoonStar className='absolute w-6 h-6 top-1/2 left-1/2 translate-x-[-50%]  transition-all  dark:[--theme-icon-offset:10px] [--theme-icon-offset:0px] translate-y-[50%+var(--theme-icon-offset)] ' />
				{/* <Sun className='absolute w-5 h-5' /> */}
			</Button>
		</>
	)
}
