// HTMLElement 타입 선언
let HTMLElement: typeof globalThis.HTMLElement = globalThis.HTMLElement || class { };

// 브라우저 환경에서 HTMLElement 초기화
if (typeof window !== 'undefined') {
    HTMLElement = window.HTMLElement;
}

import { DefineOnce } from '../util';
import { spaceStyle } from './style.css';

class IcecreamSpace extends HTMLElement {
    static observedAttributes = ['x', 'y'];

    constructor() {
        super();
    }

    connectedCallback() {
        this.classList.add(spaceStyle);
    }

    attributeChangedCallback(
        name: string,
        oldValue: string | null,
        newValue: string | null
    ) {
        if (oldValue === newValue) return;

        const value = newValue === null ? '0px' : +newValue + 'px';

        if (name === 'x') {
            this.style.setProperty('width', value);
        }
        if (name === 'y') {
            this.style.setProperty('height', value);
        }
    }
}

// 브라우저 환경에서만 DefineOnce.define 실행
if (typeof window !== 'undefined') {
    const NAME = 'ic-spacer' as const;
    DefineOnce.define(NAME, IcecreamSpace);
}

// 조건부 export 대신 빈 컴포넌트를 export
export default typeof window !== 'undefined' ? 'ic-spacer' : () => null;

export interface IcecreamSpaceProps {
    x?: number;
    y?: number;
}