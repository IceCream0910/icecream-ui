import { DefineOnce } from '../../util'
import { smallText, subtitle, textContent, title, token } from './style.css'

export const TITLE = createClassedComponent('ic-title', title)
export const SMALL_TEXT = createClassedComponent('ic-small-text', smallText)
export const SUBTITLE = createClassedComponent('ic-subtitle', subtitle)
export const TEXT_CONTENT = createClassedComponent('ic-text', textContent)
export const TOKEN = createClassedComponent('ic-token', token)

function createClassedComponent(name: string, className: string) {
	if (typeof window !== 'undefined') {
		DefineOnce.define(
			name,
			class extends HTMLElement {
				constructor() {
					super()
				}

				connectedCallback() {
					this.classList.add(className)
				}
			},
		)
	}
	return name
}

export interface IcecreamTypoProps {
	center?: boolean
	left?: boolean
	right?: boolean
	underline?: boolean
	'line-through'?: boolean
	L10?: boolean
	L9?: boolean
	L8?: boolean
	L7?: boolean
	L6?: boolean
	L5?: boolean
	L4?: boolean
	L3?: boolean
	L2?: boolean
	L1?: boolean
	skyblue?: boolean
	orange?: boolean
	children?: any
}
