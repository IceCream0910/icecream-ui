// HTMLElement 타입 선언
let HTMLElement: typeof globalThis.HTMLElement = globalThis.HTMLElement || class { };

// 브라우저 환경에서 HTMLElement 초기화
if (typeof window !== 'undefined') {
	HTMLElement = window.HTMLElement;
}

import { DefineOnce } from '../util';
import { TITLE } from '../typo';
import { titleBarStyle } from './style.css';

class IcecreamTitleBar extends HTMLElement {
	static observedAttributes = ['title', 'back'];

	private titleElement: HTMLElement | null = null;

	constructor() {
		super();
		if (typeof window !== 'undefined') {
			this.titleElement = document.createElement(TITLE);
		}
	}

	connectedCallback() {
		if (typeof window !== 'undefined' && this.titleElement) {
			this.classList.add(titleBarStyle);
			this.insertAdjacentElement('afterbegin', this.titleElement);
		}
	}

	attributeChangedCallback(
		name: string,
		_oldValue: string | null,
		newValue: string | null
	) {
		if (typeof window !== 'undefined' && this.titleElement) {
			if (name === 'title') {
				this.titleElement.textContent = newValue || '';
				return;
			}

			if (name === 'back') {
				const useBack = newValue !== null;
				const title = this.titleElement.textContent || '';

				this.titleElement.textContent = (useBack ? '←  ' : '') + title;
				this.titleElement.style.cursor = useBack ? 'pointer' : 'default';

				if (useBack) {
					this.titleElement.addEventListener(
						'click',
						IcecreamTitleBar.onTitleClicked
					);
				} else {
					this.titleElement.removeEventListener(
						'click',
						IcecreamTitleBar.onTitleClicked
					);
				}

				return;
			}
		}
	}

	static onTitleClicked() {
		if (typeof window !== 'undefined') {
			history.back();
		}
	}
}

if (typeof window !== 'undefined') {
	const NAME = 'ic-title-bar';
	DefineOnce.define(NAME, IcecreamTitleBar);
}

export default typeof window !== 'undefined' ? 'ic-title-bar' : () => null;

export interface IcecreamTitleBarProps {
	title?: string;
	back?: boolean;
}