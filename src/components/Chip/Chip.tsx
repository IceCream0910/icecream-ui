import React, { ButtonHTMLAttributes } from 'react';
import './Chip.css';

export interface ChipProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
    chipType?: 'filled' | 'outlined';
    variant?: 'primary' | 'secondary' | 'danger';
    clickable?: boolean;
}

export type ChipType = 'filled' | 'outlined';

export const Chip: React.FC<ChipProps> = ({
    children,
    chipType = 'filled',
    variant = 'primary',
    className = '',
    clickable = false,
}) => {
    const baseClass = 'chip';
    const variantClass = `chip-${chipType} ${variant} ${clickable ? 'clickable' : ''}`;

    return (
        <div className={`${baseClass} ${variantClass} ${className}`.trim()}>
            {children}
        </div>
    );
};