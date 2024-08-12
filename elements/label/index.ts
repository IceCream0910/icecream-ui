// HTMLElement 타입 선언
let HTMLElement: typeof globalThis.HTMLElement = globalThis.HTMLElement || class { };

// 브라우저 환경에서 HTMLElement 초기화
if (typeof window !== 'undefined') {
	HTMLElement = window.HTMLElement;
}

import '../typo/index';
import { SMALL_TEXT, SUBTITLE } from '../typo/index';
import { DefineOnce } from '../util';
import {
	descriptionStyle,
	labelTitle,
	labelWrapper,
	messageStyle,
} from './style.css';

class IcecreamLabel extends HTMLElement {
	static observedAttributes = ['title', 'message', 'description'];

	_labelElement: HTMLLabelElement | null = null;
	_titleElement: HTMLElement | null = null;
	_descriptionElement: HTMLElement | null = null;
	_messageElement: HTMLElement | null = null;

	constructor() {
		super();
	}

	connectedCallback() {
		if (typeof window !== 'undefined') {
			if (this.labelElement) {
				this.insertBefore(this.labelElement, this.firstChild);
			}

			const messageElement = this.messageElement;
			if (messageElement) {
				this.append(this.messageElement);
			}
		}
	}

	attributeChangedCallback(
		name: string,
		_oldValue: string | null,
		newValue: string | null
	) {
		if (typeof window !== 'undefined') {
			if (name === 'title') {
				this.titleElement.textContent = newValue || '';
			} else if (name === 'description') {
				if (!newValue) {
					this._descriptionElement?.remove();
					this._descriptionElement = null;
				} else {
					const descriptionElement = this.descriptionElement;

					if (descriptionElement) {
						descriptionElement.textContent = newValue;
						this._labelElement?.appendChild?.(descriptionElement);
					}
				}
			} else if (name === 'message') {
				if (!newValue) {
					this._messageElement?.remove();
					this._messageElement = null;
				} else {
					const messageElement = this.messageElement;

					if (messageElement) {
						messageElement.textContent = newValue;
						this.append(messageElement);
					}
				}
			}
		}
	}

	get labelElement() {
		if (typeof window !== 'undefined') {
			if (this._labelElement) {
				return this._labelElement;
			}

			const labelElement = document.createElement('label');
			labelElement.classList.add(labelWrapper);

			labelElement.append(this.titleElement);

			const descriptionElement = this.descriptionElement;

			if (descriptionElement) {
				labelElement.append(descriptionElement);
			}

			this._labelElement = labelElement;
			return labelElement;
		}
		return null;
	}

	get titleElement() {
		if (typeof window !== 'undefined') {
			if (this._titleElement) {
				return this._titleElement;
			}

			const titleElement = document.createElement(SUBTITLE);

			titleElement.textContent = this.getAttribute('title') || 'NO TITLE';
			titleElement.classList.add(labelTitle);

			this._titleElement = titleElement;

			return titleElement;
		}
		return null;
	}

	get descriptionElement() {
		if (typeof window !== 'undefined') {
			if (this._descriptionElement) {
				return this._descriptionElement;
			}

			const descriptionElement = document.createElement(SMALL_TEXT);

			const description = this.getAttribute('description');
			if (!description) {
				return null;
			}

			descriptionElement.textContent = description;
			descriptionElement.classList.add(descriptionStyle);

			this._descriptionElement = descriptionElement;

			return descriptionElement;
		}
		return null;
	}

	get messageElement() {
		if (typeof window !== 'undefined') {
			if (this._messageElement) {
				return this._messageElement;
			}

			const message = this.getAttribute('message');

			if (!message) {
				return null;
			}

			const messageElement = document.createElement(SMALL_TEXT);

			messageElement.textContent = message;
			messageElement.classList.add(messageStyle);

			this._messageElement = messageElement;

			return messageElement;
		}
		return null;
	}
}

if (typeof window !== 'undefined') {
	const name = 'ic-label';
	DefineOnce.define(name, IcecreamLabel);
}

export default typeof window !== 'undefined' ? 'ic-label' : () => null;

export interface IcecreamLabelProps {
	title: string;
	message?: string;
	description?: string;
	children?: any;
}