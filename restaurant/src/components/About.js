import React from 'react'
import aboutimg from './Images/about.jpg'

function About() {
    return (
        <>
            <section className="about" id='about'>
                <h1 className='heading'>
                    <span>ABOUT</span>us
                </h1>
                <div className="row">
                    <div className="image">
                        <img src={aboutimg} alt='' />
                    </div>
                    <div className="content">
                        <div className="aboutfood">

                            <h3>What makes Our Food sPECIAL</h3>
                            <p>At Malaka Spice, we believe that every meal should be a journey that tantalizes your taste buds and takes you on an adventure through Southeast Asia.

                                Each meal that you have at Malaka Spice is a result of many culinary tours taken in Malaysia, Indonesia, Thailand, Singapore, Vietnam, Japan and Cambodia. A lot of time was spent exploring the local kitchens in these countries followed by our own innovations, cooking and tasting conducted over and over again to bring to you the perfect creative twist on your plate!
                            </p>
                        </div>
                        
                        <a href="#" className='btn'>Learn More</a>

                    </div>

                </div>
            </section>
        </>
    )
}

export default About