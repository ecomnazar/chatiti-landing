'use client'

import React from 'react'

interface Props {
    arrayOfText: string[];
    interval?: number
}

export const TextRotator: React.FC<Props> = ({ arrayOfText, interval = 1500 }) => {
    const [currentText, setCurrentText] = React.useState(arrayOfText[0])
    const [currentIndex, setCurrentIndex] = React.useState(0)

    React.useEffect(() => {
        const timer = setInterval(() => {
            const nextIndex = (currentIndex + 1) % arrayOfText.length;
            setCurrentIndex(nextIndex);
            setCurrentText(arrayOfText[nextIndex]);
        }, interval);

        return () => clearInterval(timer);
    }, [currentIndex, currentText, interval]);

    return (
        <h4 className="-translate-y-[2px] text-[14px] sm:text-[18px] text-[#353535] font-medium font-inter">{currentText}</h4>
    )
}
