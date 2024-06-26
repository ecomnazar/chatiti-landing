import clsx from 'clsx';
import React from 'react'

interface Props {
    className?: string;
    title: string;
}

export const Button: React.FC<Props> = ({ className, title }) => {
    return (
        <button className={clsx("h-[40px] sm:h-[50px] rounded-[8px] w-[190px] sm:w-[220px] mx-auto block shadow-black bg-primary text-secondary font-bold font-inter text-[14px]", className)}>{title}</button>
    )
}
