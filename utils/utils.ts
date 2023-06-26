import { locale } from '@/utils/constants'

export function toTitleCase(str: string): string {
	return str[0].toUpperCase() + str.slice(1)
}

export function formatDateLong(datestr: string): string {
	const date = new Date(datestr)
	const day = date.toLocaleDateString(locale, { weekday: 'long' })

	const month = date.toLocaleDateString(locale, { month: 'long' })
	return `${day} ${date.getDate()} ${month} ${date.getFullYear()}`
}
export function formatDateShort(datestr: string): string {
	const date = new Date(datestr)
	const month = date.toLocaleDateString(locale, { month: 'short' })
	const year = date.getFullYear() % 100 // won't work in 77 years :(
	return `${date.getDate()} ${month} '${year}`
}

// puts ... at the end if title is too long
export function formatTitle(title: string): string {
	const threshold = 60
	if (title.length > threshold) {
		const visibleSlice = title.slice(0, threshold - 10)
		const cutSlice = title.slice(threshold - 10)
		const lastWord = cutSlice.split(' ')[0]
		return visibleSlice + lastWord + '...'
	} else {
		return title
	}
}
