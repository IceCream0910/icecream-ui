// HTMLElement 타입 선언
let HTMLElement: typeof globalThis.HTMLElement = globalThis.HTMLElement || class { };

// 브라우저 환경에서 HTMLElement 초기화
if (typeof window !== 'undefined') {
	HTMLElement = window.HTMLElement;
}

import { DefineOnce } from '../util';
import { token } from '../typo/style.css';
import {
	accentButton,
	buttonStyle,
	disabledButton,
	dangerButton,
	ghostButton,
	loadingIcon,
	secondaryButton,
} from './style.css';

const TYPE_CLASS_MAP: Record<string, string> = {
	accent: accentButton,
	secondary: secondaryButton,
	ghost: ghostButton,
	danger: dangerButton,
};

// TODO: Reimplement IcecreamButton component

class IcecreamButton extends HTMLElement {
	static observedAttributes = ['disabled', 'type', 'icon', 'loading'];
	static defaultType = 'primary';

	private typeClass: string | null = null;
	private loadingIcon: HTMLDivElement | null = null;

	constructor() {
		super();

		// 브라우저 환경에서만 loadingIcon 생성
		if (typeof window !== 'undefined') {
			this.loadingIcon = document.createElement('div');
			this.loadingIcon.classList.add(loadingIcon);
			this.loadingIcon.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <style>.spinner_aj0A{transform-origin:center;animation:spinner_KYSC .75s infinite linear}@keyframes spinner_KYSC{100%{transform:rotate(360deg)}}</style>
        <path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" class="spinner_aj0A" fill="currentColor"/></svg>
      `;
		}
	}

	connectedCallback() {
		if (typeof window !== 'undefined') {
			this.addEventListener('click', () => {
				if (this.getAttribute('type') === 'submit') {
					this.submit();
				}
			});

			this.addEventListener('keydown', (event) => {
				const isEnter = event.key === 'Enter';
				const isSpace = event.key === ' ';

				if (!isEnter && !isSpace) {
					return;
				}

				if (this.getAttribute('type') === 'submit') {
					this.submit();
				} else {
					this.click();
				}
			});

			this.setAttribute('aria-atomic', 'true');
			this.classList.add(buttonStyle, token);
			if (this.loadingIcon) {
				this.insertAdjacentElement('afterbegin', this.loadingIcon);
			}

			this.setInitialAttributes();
		}
	}

	submit() {
		if (typeof window !== 'undefined') {
			const virtualSubmitButton = document.createElement('input');
			virtualSubmitButton.type = 'submit';
			virtualSubmitButton.style.display = 'none';

			this.parentElement?.appendChild(virtualSubmitButton);
			virtualSubmitButton.click();
			this.parentElement?.removeChild(virtualSubmitButton);
		}
	}

	setInitialAttributes() {
		const type = this.getAttribute('type') || IcecreamButton.defaultType;

		this.setTypeClass(type);

		const disabled = this.getAttribute('disabled') !== null;
		const isLoading = this.getAttribute('loading') !== null;

		this.setDisability(disabled, isLoading);
	}

	attributeChangedCallback(
		name: string,
		_oldValue: string,
		newValue: string
	) {
		if (name === 'disabled') {
			const isLoading = this.getAttribute('loading') !== null;
			this.setDisability(newValue !== null, isLoading);

			return;
		}

		if (name === 'type') {
			this.setTypeClass(newValue);

			return;
		}

		if (name === 'loading') {
			this.setLoading(newValue !== null);

			const isDisabled = this.getAttribute('disabled') !== null;
			this.setDisability(isDisabled, newValue !== null);

			return;
		}
	}

	setTypeClass(type: string | null) {
		if (!type) return;

		if (this.typeClass) {
			this.classList.remove(this.typeClass);
		}

		const newTypeClass = TYPE_CLASS_MAP[type];
		if (!newTypeClass) return;

		this.classList.add(newTypeClass);
		this.typeClass = newTypeClass;
	}

	setDisability(disabled: boolean, isLoading: boolean) {
		if (typeof window !== 'undefined') {
			const isChildOfAnchor = this.parentElement instanceof HTMLAnchorElement;
			const isBlocked = disabled || isLoading;

			const tabindex = isChildOfAnchor || isBlocked ? '-1' : '0';

			if (isBlocked) {
				this.classList.add(disabledButton);
				this.setAttribute('aria-disabled', 'true');
			} else {
				this.classList.remove(disabledButton);
				this.removeAttribute('aria-disabled');
			}

			this.setAttribute('tabindex', tabindex);
		}
	}

	setLoading(isLoading: boolean) {
		if (typeof window !== 'undefined' && this.loadingIcon) {
			if (isLoading) {
				this.setAttribute('aria-live', 'polite');
				this.setAttribute('aria-busy', 'true');
				this.loadingIcon.style.setProperty('display', 'block');
			} else {
				this.removeAttribute('aria-live');
				this.removeAttribute('aria-busy');
				this.loadingIcon.style.setProperty('display', 'none');
			}
		}
	}

	set textContent(value: string) {
		if (typeof window !== 'undefined') {
			const textNodes = Array.from(this.childNodes).filter(
				(node) => node instanceof Text && node.textContent?.trim().length
			);

			for (const node of textNodes) {
				this.removeChild(node);
			}

			this.appendChild(document.createTextNode(value));
		}
	}
}

// 브라우저 환경에서만 DefineOnce.define 실행
if (typeof window !== 'undefined') {
	const NAME = 'ic-button';
	DefineOnce.define(NAME, IcecreamButton);
}

export default typeof window !== 'undefined' ? 'ic-button' : () => null;

export interface IcecreamButtonProps {
	type?: 'accent' | 'secondary' | 'ghost' | 'danger';
	disabled?: boolean;
	loading?: boolean;
	icon?: string;
	children?: any;
	size?: 'default' | 'big' | 'bigger';
}