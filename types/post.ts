export default interface Post {
	default: JSX.Element
	metaData: {
		title: string
		description: string
		date: Date
		slug: string
		image?: string
	}
}
