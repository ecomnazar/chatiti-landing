import clsx from 'clsx';
import React from 'react'

interface Props {
    className?: string;
    title: string
}

export const Title: React.FC<Props> = ({ className, title }) => {
    return (
        <h3 className={clsx('text-[12px] sm:text-[28px] font-playfair font-semibold', className)}>{title}</h3>
    )
}
