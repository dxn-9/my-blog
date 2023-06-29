import path from 'node:path'
import fs from 'node:fs/promises'
import type Post from '@/types/post'
import { locale } from '@/lib/constants'
import { toTitleCase } from '@/lib/utils'

type sortFn = (post1: Post, post2: Post) => number

const defaultSort: sortFn = (post1: Post, post2: Post) =>
	post1.metaData.date > post2.metaData.date ? -1 : 1 // by default we sort the newest post first

let prevPosts: null | Post[] = null
let prevSortFn: null | sortFn = null

export async function getPosts(sortFn = defaultSort): Promise<Readonly<Post[]>> {
	if (sortFn === prevSortFn && prevPosts) {
		// cache
		return prevPosts
	}

	const p = path.join(process.cwd(), 'posts')
	const files = await fs.readdir(p)
	const posts = await Promise.all(
		files.map((file) => import(`@/posts/${file}`) as Promise<Post>)
	)

	prevSortFn = sortFn
	prevPosts = posts.sort(sortFn)
	return prevPosts
}
export async function getPostsMeta(
	sortFn?: sortFn
): Promise<Readonly<Post['metaData'][]>> {
	const posts = await getPosts(sortFn)
	return posts.map((post) => post.metaData)
}

export async function getPostBySlug(slug: string): Promise<Readonly<Post> | null> {
	// i'll try to use same slugs as filesnames, but it can be different sometimes
	try {
		return (await import(`@/posts/${slug}.mdx`)) as Post
	} catch (e) {
		const posts = (await getPosts()).filter((post) => post.metaData.slug === slug)
		if (posts.length > 1) {
			console.error('Cannot have posts with same slug!')
		} else if (posts.length === 1) {
			return posts[0]
		}
		return null
	}
}
export async function getPostByDate(slug: string) {}
