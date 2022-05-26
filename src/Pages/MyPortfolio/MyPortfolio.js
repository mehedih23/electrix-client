import React from 'react'
import Intro from './Intro'
import PortfolioBanner from './PortfolioBanner'
import Skills from './Skills'
import Work from './Work'

const MyPortfolio = () => {
    return (
        <div>
            <PortfolioBanner></PortfolioBanner>
            <Intro></Intro>
            <Skills></Skills>
            <Work></Work>
        </div>
    )
}

export default MyPortfolio