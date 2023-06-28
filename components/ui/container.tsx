import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const containerVariants = cva(
	'flex items-center justify-center rounded-md font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ',
	{
		variants: {
			variant: {
				outline: 'bg-background-accent text-card-foreground border border-input',
				primary: 'bg-primary text-primary-foreground',
			},
			padding: {
				none: '',
				sm: 'px-4 py-2',
				md: 'px-6 py-3',
				lg: 'px-8 py-4',
			},
			size: {
				fit: 'w-fit h-fit',
				default: 'w-auto h-auto',
			},
		},
		defaultVariants: {
			variant: 'outline',
			padding: 'sm',
			size: 'default',
		},
	}
)

interface ContainerProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof containerVariants> {}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
	({ className, variant, padding, size, ...props }, ref) => {
		return (
			<div
				ref={ref}
				{...props}
				className={cn(containerVariants({ variant, padding, size, className }))}
			/>
		)
	}
)

Container.displayName = 'container'

export default Container
