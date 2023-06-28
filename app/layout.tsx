import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import React from 'react'
import { getPosts, getPostsMeta } from '@/lib/posts'
import { ThemeProvider } from '@/components/theme-provider'
import PostContextProvider from '@/components/posts-context'
import Footer from '@/components/footer'

export const metadata = {
	title: "Daniel's Blog",
	description: "Developer's blog by Daniel Lauri",
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const postsMeta = await getPostsMeta()

	return (
		<html lang='en' suppressHydrationWarning>
			<body>
				<ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
					<main className='flex justify-center mx-auto md:min-h-[calc(100vh-11rem)] min-h-[calc(100vh-2.5rem)] md:mt-44 mt-24'>
						<div className='max-w-[80ch] w-full md:pl-16 px-1 flex flex-col md:relative '>
							<Navbar postsMeta={postsMeta} />
							{children}
						</div>
					</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	)
}
