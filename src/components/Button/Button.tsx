import React, { ButtonHTMLAttributes } from 'react';
import './Button.css';
import { Loader } from '../Loader/Loader';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger';
    disabled?: boolean;
    loading?: boolean;
    icon?: React.ReactNode;
}

export type ButtonType = 'filled' | 'outlined' | 'transparent';

export const Button: React.FC<ButtonProps> = ({
    children,
    type = 'filled',
    variant = 'primary',
    className = '',
    disabled = false,
    loading = false,
    icon,
    ...props
}) => {
    const baseClass = 'button';
    const variantClass = `button-${type} ${variant}`;

    return (
        <button
            className={`${baseClass} ${variantClass} ${className}`.trim()} disabled={disabled}
            {...props}
        >
            {loading && <Loader x='10px' y='10px' />}
            {icon}
            {children}
        </button>
    );
};