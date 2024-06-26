import clsx from 'clsx';
import React from 'react'

interface Props {
    className?: string;
    children: React.ReactNode;
}

export const Container: React.FC<Props> = ({ className, children }) => {
    return (
        <div className={clsx('max-w-[856px] w-full mx-auto px-[30px]', className)}>{children}</div>
    )
}
