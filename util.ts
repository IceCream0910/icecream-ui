export function passAttributes(
	target: HTMLElement,
	origin: HTMLElement,
	attributes: string[],
) {
	for (const attribute of attributes) {
		const value = origin.getAttribute(attribute)

		if (value !== null) {
			target.setAttribute(attribute, value)
		}
	}
}

export class DefineOnce {
	static define(tagName: string, element: CustomElementConstructor) {
		if (!customElements.get(tagName)) {
			customElements.define(tagName, element)
			// console.info(`${tagName} 정의됨`)
		}
	}
}

export function defaultProps(
	element: HTMLElement,
	attributes: Record<string, string>,
) {
	for (const key in attributes) {
		const value = attributes[key]

		if (!element.hasAttribute(key)) {
			element.setAttribute(key, value)
		}
	}
}
