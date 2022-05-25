import React from 'react'
import Banner from './Banner'
import Contact from './Contact'
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
            <Contact></Contact>
        </div>
    )
}

export default Home