// HTMLElement 타입 선언
let HTMLElement: typeof globalThis.HTMLElement = globalThis.HTMLElement || class { };

// 브라우저 환경에서 HTMLElement 초기화
if (typeof window !== 'undefined') {
	HTMLElement = window.HTMLElement;
}

import { DefineOnce, passAttributes } from '../util';
import { checkboxStyle } from './style.css';

class IcecreamCheckbox extends HTMLElement {
	static observedAttributes = ['checked', 'disabled'];

	constructor() {
		super();
	}

	private inputElement = this.buildInput();

	buildInput() {
		if (typeof window !== 'undefined') {
			const input = document.createElement('input');
			input.setAttribute('type', 'checkbox');
			input.classList.add(checkboxStyle);
			return input;
		}
		return null;
	}

	connectedCallback() {
		if (typeof window !== 'undefined') {
			if (this.inputElement) {
				this.appendChild(this.inputElement);
			}
			this.setAttribute('role', 'checkbox');

			passAttributes(this.inputElement, this, ['checked', 'disabled']);
		}
	}
}

if (typeof window !== 'undefined') {
	DefineOnce.define('ic-checkbox', IcecreamCheckbox);
}

const name = typeof window !== 'undefined' ? 'ic-checkbox' : () => null;
export default name;

export interface IcecreamCheckboxProps {
	checked?: boolean;
	disabled?: boolean;
	children?: any;
}