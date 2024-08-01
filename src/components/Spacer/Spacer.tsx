import React from 'react';

export interface SpacerProps extends React.HTMLAttributes<HTMLDivElement> {
    y?: string;
    x?: string;
}

export const Spacer: React.FC<SpacerProps> = ({
    y = '20px',
    x = '0',
    ...props
}) => {
    return (
        <div style={{ height: y, width: x }}
            {...props}
        />
    );
};