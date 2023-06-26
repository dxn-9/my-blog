import path from 'node:path'
import fs from 'node:fs/promises'
import type Post from '@/types/post'

const defaultSort = (post1: Post, post2: Post) =>
	post1.metaData.date > post2.metaData.date ? -1 : 1 // by default we sort the newest post first

export async function getPosts(sortFn = defaultSort) {
	const p = path.resolve(process.cwd(), 'posts')
	const files = await fs.readdir(p)
	const posts = await Promise.all(
		files.map((file) => import(`@/posts/${file}`) as Promise<Post>)
	)
	return posts.sort(sortFn)
}

export async function getPostBySlug(slug: string) {}
export async function getPostByDate(slug: string) {}
