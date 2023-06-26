const fs = require('node:fs/promises')
const path = require('node:path')

// this can probably be done in ci
async function main() {
	if (process.argv.length !== 3) {
		throw new Error('Invalid args')
	}

	const arg = process.argv[2].split('=')
	const command = arg[0]
	const val = arg[1]
	const p = path.resolve('posts', `${val}.mdx`)

	if (command === 'up') {
		// update
		const content = (await fs.readFile(p)) as Buffer
		const fileContents = content.toString()
		const hasBeenUpdated = fileContents.match(/updated:(.*),/gm)
		let newContents = ''
		if (hasBeenUpdated) {
			newContents = fileContents.replace(
				/updated:.*,/gm,
				`updated: '${new Date().toISOString()}',`
			)
		} else {
			newContents = fileContents.replace(/date:.*,/gm, (prev) => {
				return `${prev}\n\tupdated: '${new Date().toISOString()}',`
			})
		}
		await fs.writeFile(p, newContents)
		console.info('SUCCESS - Written to', p)
	} else if (command === 'sign') {
		const content = (await fs.readFile(p)) as Buffer
		const fileContents = content.toString()
		const hasBeenSigned = fileContents.match(/date:(.*),/gm)
		if (hasBeenSigned) {
			throw new Error('Already signed!')
		}
		const newContents = fileContents.replace(/description:.*,/gm, (prev) => {
			return `${prev}\n\tdate: '${new Date().toISOString()}',`
		})
		await fs.writeFile(p, newContents)
		console.info('SUCCESS - Written to', p)
	}
}
main()
