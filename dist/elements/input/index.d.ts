declare const name: string | (() => null);
export default name;
export interface IcecreamInputProps {
    placeholder?: string;
    type?: string;
    value?: string;
    autofocus?: boolean;
    disabled?: boolean;
    max?: string;
    min?: string;
    list?: string;
    readonly?: boolean;
    step?: string;
    pattern?: string;
    inputmode?: string;
    name?: string;
    icon?: string;
    children?: any;
}
