import { cn } from '@/lib/utils'
import React from 'react'

export interface SmallProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const Comment = React.forwardRef<HTMLParagraphElement, SmallProps>(
	({ children, className, ...props }, ref) => {
		return (
			<p
				ref={ref}
				className={cn('text-sm text-muted-foreground', className)}
				{...props}>
				{children}
			</p>
		)
	}
)
Comment.displayName = 'Comment'

export default Comment
