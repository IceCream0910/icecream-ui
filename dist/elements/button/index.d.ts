declare const _default: "ic-button" | (() => null);
export default _default;
export interface IcecreamButtonProps {
    type?: 'accent' | 'secondary' | 'ghost' | 'danger';
    disabled?: boolean;
    loading?: boolean;
    icon?: string;
    children?: any;
    size?: 'default' | 'big' | 'bigger';
}
