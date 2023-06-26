import { MDXProps } from 'mdx/types'

export default interface Post {
	default: (props: MDXProps) => JSX.Element
	metaData: {
		title: string
		description: string
		date: string
		slug: string
		updated?: string
	}
}
