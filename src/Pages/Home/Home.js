import React from 'react'
import Banner from './Banner'
import Address from './Address'
import Reviews from './Reviews'
import Summary from './Summary'
import Tools from './Tools'
import WhoWe from './WhoWe'
import WhyBuy from './WhyBuy'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <Summary></Summary>
            <WhyBuy></WhyBuy>
            <WhoWe></WhoWe>
            <Reviews></Reviews>
            <Address></Address>
        </div>
    )
}

export default Home