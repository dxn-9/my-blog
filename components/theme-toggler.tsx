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
				name='theme toggler'
				aria-label='theme toggler'
				size='icon'
				className='relative z-10 overflow-hidden bg-background-accent'
				onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
				<MoonStar className='absolute w-6 h-6 top-1/2 left-1/2 translate-x-[-50%]  transition-all  dark:[--theme-icon-offset:0px] [--theme-icon-offset:2.5rem] translate-y-[calc(-50%+var(--theme-icon-offset))] ' />
				<Sun className='absolute w-6 h-6 top-1/2 left-1/2 translate-x-[-50%]  transition-all  dark:[--theme-icon-offset:2.5rem] [--theme-icon-offset:-0px] translate-y-[calc(-50%+var(--theme-icon-offset))] ' />
			</Button>
		</>
	)
}
