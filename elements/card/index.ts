// HTMLElement 타입 선언
let HTMLElement: typeof globalThis.HTMLElement = globalThis.HTMLElement || class { };

// 브라우저 환경에서 HTMLElement 초기화
if (typeof window !== 'undefined') {
	HTMLElement = window.HTMLElement;
}

import { DefineOnce } from '../util';
import { cardStyle } from './style.css';

class IcecreamCard extends HTMLElement {
	static observedAttributes = ['p', 'g'];

	constructor() {
		super();
	}

	connectedCallback() {
		this.setAttribute('role', 'card');
		this.classList.add(cardStyle);
	}

	attributeChangedCallback(
		name: string,
		oldValue: string | null,
		newValue: string | null
	) {
		if (oldValue === newValue) return;

		const value = newValue === null ? '0rem' : +newValue + 'rem';

		if (name === 'p') {
			this.style.setProperty('padding', value);
		}
		if (name === 'g') {
			this.style.setProperty('gap', value);
		}
	}
}

// 브라우저 환경에서만 DefineOnce.define 실행
if (typeof window !== 'undefined') {
	const NAME = 'ic-card' as const;
	DefineOnce.define(NAME, IcecreamCard);
}

// 조건부 export
export default typeof window !== 'undefined' ? 'ic-card' : () => null;

export interface IcecreamCardProps {
	p?: number;
	g?: number;
	children?: any;
}