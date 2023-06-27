'use client'

import Post from '@/types/post'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import {
	Command,
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut,
} from '@/components/ui/command'
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog'
import { Home, Search } from 'lucide-react'
import { formatTitle } from '@/lib/utils'
import Fuse from 'fuse.js'
import { Result } from 'postcss'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
export default function SearchModal({
	postsMeta,
}: {
	postsMeta: Readonly<Post['metaData'][]>
}) {
	const [searchValue, setSearchValue] = useState('')
	const fuse = useRef(new Fuse(postsMeta, { keys: ['title', 'desc'] }))
	const router = useRouter()
	const topPosts = useMemo(() => {
		if (!searchValue) {
			return postsMeta.slice(0, 4)
		}
		const result = fuse.current.search(searchValue)
		return result.map((r) => r.item).slice(0, 4)
	}, [searchValue, postsMeta])

	const [open, setOpen] = useState(false)

	useEffect(() => {
		let animHandle: ReturnType<typeof setTimeout>
		if (!open) {
			animHandle = setTimeout(() => {
				setSearchValue('')
			}, 151) // time of the animation
		}
		return () => {
			clearTimeout(animHandle)
		}
	}, [open])

	return (
		<div>
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger>
					<Search />
				</DialogTrigger>
				<DialogContent className='overflow-hidden p-0 shadow-lg'>
					<Command
						shouldFilter={false}
						className='[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5'>
						<CommandInput
							onValueChange={(search) => setSearchValue(search)}
							placeholder='Cerca un titolo...'
						/>
						<CommandList>
							<CommandGroup heading='Post suggeriti'>
								{topPosts.map((post) => (
									<CommandItem
										key={post.slug}
										value={post.slug}
										onSelect={(ev) => {
											setOpen(false)
											router.push(`/post/${post.slug}`)
										}}
										className='grid'>
										<h3>{formatTitle(post.title)}</h3>
										<p className='opacity-50'>
											{formatTitle(post.description)}
										</p>
									</CommandItem>
								))}
								{topPosts.length === 0 && (
									<CommandItem disabled>
										Nessun post trovato.
									</CommandItem>
								)}
							</CommandGroup>
						</CommandList>
						<CommandSeparator />
						<div className='h-10 p-2 flex items-center'>
							<Link href={'/'}>
								<Home size={20} />
							</Link>
						</div>
					</Command>
				</DialogContent>
			</Dialog>
		</div>
	)
}
