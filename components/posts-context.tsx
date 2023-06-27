'use client'

import Post from '@/types/post'
import React from 'react'

export const postContext = React.createContext<{ posts: Readonly<Post[]> }>({ posts: [] })

export const PostContextProvider = ({
	posts,
	children,
}: React.PropsWithChildren<{ posts: Readonly<Post[]> }>) => {
	return <postContext.Provider value={{ posts }}>{children}</postContext.Provider>
}
export default PostContextProvider
