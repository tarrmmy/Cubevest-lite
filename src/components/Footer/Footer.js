import './Footer.css'
import React from 'react'
import techpoint from './techpoint.png'
import guard from './guard.png'
import techcrunch from './techcrunch.png'

const Footer = () => {
    return (
        <div>
            {/* A */}
            <div className="camp">

                <h4 className="as">As featured in</h4>
                <img className="photo" src={techpoint} />
                <img className="photo" src={guard} />
                <img className="photo" src={techcrunch}/>

            </div>
            {/* A ends */}
            {/* B */}
            <div className="pus ter">
                <h2 className="lite">cubevest-lite</h2>
                <div className="capital">
                    <h4 id="pro" className="hit-a">Products</h4>
                    <h5 className="hit">Piggybank</h5>
                    <h5 className="hit">Invest</h5>
                    <h5 className="hit">Safe Lock</h5>
                    <h5 className="hit">Target Savings</h5>
                    <h5 className="hit">Flex Naira</h5>
                </div>

                <div className="cap">
                    <h4 className="hit-a">Company</h4>
                    <h5 className="hit">About</h5>
                    <h5 className="hit">FAQs</h5>
                    <h5 className="hit">Blog</h5>
                </div>

                <div className="cap">
                    <h4 id="leg" className="hit-a">Legal</h4>
                    <h5 className="hit">Terms</h5>
                    <h5 className="hit">Privacy</h5>
                    <h5 className="hit">Security</h5>
                </div>
                <div>
                    <div className="icons">
                    <i class='fab fa-facebook-square' style={{fontSize:'30px'}}/>
                    <i class="fab fa-twitter-square" style={{fontSize:'30px'}}></i>
                    <i class="fab fa-instagram" style={{fontSize:'30px'}}></i>
                    </div>


                    <h5 id="mot">Tesmot house, Abdulrahman Okene<br/>
                    close, Victoria Island, Lagos, Nigeria.</h5>
                    <h5 className="hit">contact@piggyvest.com</h5>
                    <h5 className="hit-1">+234 700 101 101 101</h5>
                </div>

            </div>
            {/* B ends */}

            <h5 className="down">Piggyvest (formerly piggybank.ng) is the leading online savings & investing platform in Nigeria. For over 5 years, our<br/>customers have saved and invested billions of Naira that they would normally be tempted to spend.</h5>
            <h5 className="downtown">2016 - 2021 PiggyTech Global Limited - RC 1405222</h5>
        </div>
    )
}

export default Footer
