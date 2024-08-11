// HTMLElement 타입 선언
let HTMLElement: typeof globalThis.HTMLElement = globalThis.HTMLElement || class { };

// 브라우저 환경에서 HTMLElement 초기화
if (typeof window !== 'undefined') {
	HTMLElement = window.HTMLElement;
}

import { DefineOnce } from '../../util';
import { smallText } from '../typo/style.css';
import { chipStyle } from './style.css';

export class IcecreamChip extends HTMLElement {
	connectedCallback() {
		if (typeof window !== 'undefined') {
			this.classList.add(chipStyle, smallText);
		}
	}
}

const name = 'ic-chip';

if (typeof window !== 'undefined') {
	DefineOnce.define(name, IcecreamChip);
}

export default typeof window !== 'undefined' ? name : () => null;

export interface IcecreamChipProps {
	children?: any;
}