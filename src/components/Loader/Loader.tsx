import React from 'react';
import './Loader.css';

export interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
    y?: string;
    x?: string;
    tick?: number;
}

export const Loader: React.FC<LoaderProps> = ({
    x = '30px',
    y = '30px',
    tick = 3,
    ...props
}) => {
    return (
        <div className="loader" style={{ height: y, width: x, borderWidth: `${tick}px` }}
            {...props}
        />
    );
};