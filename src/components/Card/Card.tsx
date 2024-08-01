import React, { ButtonHTMLAttributes } from 'react';
import './Card.css';

export interface CardProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
    cardType?: 'filled' | 'outlined' | 'transparent';
    variant?: 'primary' | 'secondary' | 'danger';
    width?: string;
    height?: string;
    clickable?: boolean;
}

export type cardType = 'filled' | 'outlined' | 'transparent';

export const Card: React.FC<CardProps> = ({
    children,
    cardType = 'filled',
    variant = 'primary',
    width = '100%',
    height = '100%',
    className = '',
    clickable = false,
}) => {
    const baseClass = 'card';
    const variantClass = `card-${cardType} ${variant} ${clickable ? 'clickable' : ''}`;

    return (
        <div className={`${baseClass} ${variantClass} ${className}`.trim()} style={{ width, height }}>
            {children}
        </div>
    );
};