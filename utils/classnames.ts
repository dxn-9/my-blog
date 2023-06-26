interface objClass {
	[key: string]: boolean
}

export function classnames(...classes: (string | undefined | objClass | string[])[]) {
	const valid_classes = []
	for (const s_class of classes) {
		if (typeof s_class === 'object') {
			if (Array.isArray(s_class)) {
				valid_classes.concat(s_class)
			} else {
				Object.keys(s_class).forEach((key) => {
					if (s_class[key]) {
						valid_classes.push(key)
					}
				})
			}
		} else if (s_class) valid_classes.push(s_class)
	}
	return valid_classes.join(' ')
}
