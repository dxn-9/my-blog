import { cn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority'
import React from 'react'

const highlighterVariants = cva(
	'p-4 rounded-md flex items-center border justify-center [&>p]:m-0',
	{
		variants: {
			type: {
				default: 'bg-gray-500/20 border-gray-400/50',
				info: 'bg-green-500/20 border-green-400/50 ',
			},
		},
		defaultVariants: {
			type: 'default',
		},
	}
)

export interface HighlighterProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof highlighterVariants> {}

const Highlighter = React.forwardRef<HTMLDivElement, HighlighterProps>(
	({ className, type, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={cn(highlighterVariants({ className, type }))}
				{...props}></div>
		)
	}
)

Highlighter.displayName = 'Highlighter'

export default Highlighter
