import React from 'react'
import Banner from './Banner'
import Reviews from './Reviews'
import Summary from './Summary'
import Tools from './Tools'
import WhyBuy from './WhyBuy'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <Summary></Summary>
            <WhyBuy></WhyBuy>
            <Reviews></Reviews>
        </div>
    )
}

export default Home