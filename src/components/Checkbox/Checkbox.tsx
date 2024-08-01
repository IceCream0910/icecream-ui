import React, { InputHTMLAttributes } from 'react';
import './Checkbox.css';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    variant?: 'primary' | 'danger';
    label?: string;
    checked?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({
    variant = 'primary',
    label = '',
    checked = true,
    className = '',
    ...props
}) => {
    const baseClass = 'checkbox';
    const variantClass = `checkbox ${variant}`;

    const randomId = Math.random().toString(36).substring(7);

    return (
        <>
            <input type="checkbox" checked={checked} id={randomId}
                className={`${baseClass} ${variantClass} ${className}`.trim()}
                {...props}
            />
            <label className='checkbox-label' htmlFor={randomId}>{label}</label>
        </>
    );
};