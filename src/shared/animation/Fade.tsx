'use client'

import React from 'react'
import { Fade } from 'react-awesome-reveal'

interface Props {
    children: React.ReactNode
}

export const FadeAnimation: React.FC<Props> = ({ children }) => {
    return (
        <Fade duration={2000}>{children}</Fade>
    )
}
