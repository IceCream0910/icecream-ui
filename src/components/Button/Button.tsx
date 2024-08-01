import React, { ButtonHTMLAttributes } from 'react';
import './Button.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger';
}

export type ButtonType = 'filled' | 'outlined' | 'transparent';

export const Button: React.FC<ButtonProps> = ({
    children,
    type = 'filled',
    variant = 'primary',
    className = '',
    ...props
}) => {
    const baseClass = 'button';
    const variantClass = `button-${type} ${variant}`;

    return (
        <button
            className={`${baseClass} ${variantClass} ${className}`.trim()}
            {...props}
        >
            {children}
        </button>
    );
};