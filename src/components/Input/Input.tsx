import React, { InputHTMLAttributes } from 'react';
import './Input.css';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    inputType?: 'filled' | 'outlined' | 'transparent';
    variant?: 'primary' | 'danger';
    disabled?: boolean;
}

export const Input: React.FC<InputProps> = ({
    inputType = 'filled',
    variant = 'primary',
    placeholder = '텍스트 입력',
    value = '',
    className = '',
    disabled = false,
    ...props
}) => {
    const baseClass = 'input';
    const variantClass = `input-${inputType} ${variant}`;

    return (
        <input
            placeholder={placeholder}
            value={value} disabled={disabled}
            className={`${baseClass} ${variantClass} ${className}`.trim()}
            {...props}
        />
    );
};