import path from 'node:path'
import fs from 'node:fs/promises'
import type Post from '@/types/post'
import { locale } from '@/utils/constants'
import { toTitleCase } from '@/utils/utils'

const defaultSort = (post1: Post, post2: Post) =>
	post1.metaData.date > post2.metaData.date ? -1 : 1 // by default we sort the newest post first

export async function getPosts(sortFn = defaultSort): Promise<Post[]> {
	const p = path.resolve(process.cwd(), 'posts')
	const files = await fs.readdir(p)
	const posts = await Promise.all(
		files.map((file) => import(`@/posts/${file}`) as Promise<Post>)
	)
	return posts.sort(sortFn)
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
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
