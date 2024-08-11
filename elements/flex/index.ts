// HTMLElement 타입 선언
let HTMLElement: typeof globalThis.HTMLElement = globalThis.HTMLElement || class { };

// 브라우저 환경에서 HTMLElement 초기화
if (typeof window !== 'undefined') {
    HTMLElement = window.HTMLElement;
}

import { DefineOnce } from '../../util';
import { horzStyle, vertStyle } from './style.css';

class IcecreamHorz extends HTMLElement {
    static observedAttributes = ['gap', 'p', 'px', 'py'];

    connectedCallback() {
        if (typeof window !== 'undefined') {
            this.classList.add(horzStyle);
        }
    }

    attributeChangedCallback(
        name: string,
        oldValue: string,
        newValue: string
    ) {
        if (typeof window !== 'undefined') {
            if (name === 'gap') {
                this.style.gap = newValue + 'rem';
            } else if (name === 'p') {
                this.style.padding = newValue + 'rem';
            } else if (name === 'px') {
                this.style.paddingInline = newValue + 'rem';
            } else if (name === 'py') {
                this.style.paddingBlock = newValue + 'rem';
            }
        }
    }
}

export const horz = typeof window !== 'undefined' ? 'ic-horz' : () => null;

if (typeof window !== 'undefined') {
    DefineOnce.define(horz, IcecreamHorz);
}

class IcecreamVert extends HTMLElement {
    static observedAttributes = ['gap', 'p', 'px', 'py'];

    connectedCallback() {
        if (typeof window !== 'undefined') {
            this.classList.add(vertStyle);
        }
    }

    attributeChangedCallback(
        name: string,
        oldValue: string,
        newValue: string
    ) {
        if (typeof window !== 'undefined') {
            if (name === 'gap') {
                this.style.gap = newValue + 'rem';
            } else if (name === 'p') {
                this.style.padding = newValue + 'rem';
            } else if (name === 'px') {
                this.style.paddingInline = newValue + 'rem';
            } else if (name === 'py') {
                this.style.paddingBlock = newValue + 'rem';
            }
        }
    }
}

export const vert = typeof window !== 'undefined' ? 'ic-vert' : () => null;

if (typeof window !== 'undefined') {
    DefineOnce.define(vert, IcecreamVert);
}

export interface IcecreamHovertProps {
    gap?: string | number;
    p?: string | number;
    px?: string | number;
    py?: string | number;
    children?: any;
    linebreak?: boolean;
    x?: 'left' | 'center' | 'right' | 'stretch' | 'space';
    y?: 'top' | 'center' | 'bottom' | 'stretch' | 'space';
    scroll?: boolean;
    fade?: boolean;
}