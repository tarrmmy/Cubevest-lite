
import React from 'react';
import Nav from '../../../components/Navbar/Nav';
import './invest.css';
import phone from './phone.png'
// import card1 from './card1.png'
// import card2 from './card2.png'
import icon1 from './icon1.png'
import icon2 from './icon2.png'
import icon3 from './icon3.png'
import cashew from './cashew.jpg'
import cassava from './cassava.jpg'
import herdsman from './herdsman.jpg'
import orange from './orange.jpg'
import potato from './potato.jpg'
import seed from './seed.jpg'
import { Card } from 'antd';

const invest = () => {
    const { Meta } = Card;
        // const Thinking = [
        //     {
        //     img:{},
        //     name:'Save automatically',
        //     text:'Choose between automatic daily, <br/>weekly or monthly savings. Once you choose, our system does the rest for you. You’re in control, and can always change your settings anytime.'
        //     },
        // ]
    return (
        <div>
          <Nav />
            <div className="Time">

                <div id="invest">

                  <h1 id="on-the-go">Invest on the go.</h1>
                  <h5 className="text-center">Invest securely and confidently on the go.<br/> Up to 25% returns, 6-12 month duration.</h5>
                  <button className="butt">Start Saving Today</button>
                
                </div>
               <img id="telephone" src={phone} />
               {/* <img id="tele" src={card1}/>
               <img id="tele" src={card2}/> */}
            </div>

              <div id="semin">  

                  <h1 id="sip">Simple investments with great returns</h1>

                </div> 
                <h4 id="investment">Investments are made readily accessible to everyone</h4>
               

               {/* divs */}
            <div id="divs">

                <div id="up">
                    <img id="up1" src={icon1}/>
                    <h3 id="up2">Investments simplified</h3>
                    <h4 id="up3">With minimum investments starting<br/>as low as N5,000, investment is no<br/>longer out of reach. Everyone is<br/>welcome.</h4>
                </div>
                
                <div id="up">
                    <img id="up1" src={icon2}/>
                    <h3 id="up2">Invest confidently</h3>
                    <h4 id="up3">All listed investments are properly<br/>due diligenced and highly secured<br/>opportunities.</h4>
                </div>
                
                <div id="up">
                    <img id="up1" src={icon3}/>
                    <h3 id="up2">Diversify your portfolio</h3>
                    <div id="up3">Invest in various industries such as<br/>fixed income instruments, agriculture,<br/>transportation, etc.</div>
                </div>
                
            </div>   

            <div className="patterny">
                <div className="patterny-A">We’ve made it easier for<br/>anyone to get started.</div>
                <div className="patterny-B">With as little as NGN5000, you can now access pre-vetted<br/>low-medium risk primary and secondary investment<br/>opportunities. No hidden fees/charges. Thorough due<br/>diligence and pre-vetting on all investments are carried<br/>out for maximum safety.</div>
            </div>

            <h1 id="cent">Recent Opportunities on Investify</h1>
            {/* bottom cards */}
            <div id="Deck">

                <div id="DeckA">

                    <div class="card" style={{width: "20rem",height:"350px"}}>
                        <img id="card-img" src={orange} class="card-img-top" alt="..."/>
                        <div class="card-body">
                         <p class="card-text"></p>
                        </div>
                    </div>

                    <div class="card" style={{width: "20rem",height:"350px"}}>
                        <img id="card-img" src={cashew} class="card-img-top" alt="..."/>
                        <div class="card-body">
                         <p class="card-text"></p>
                        </div>
                    </div>

                    <div class="card" style={{width: "20rem",height:"350px"}}>
                        <img id="card-img" src={cassava} class="card-img-top" alt="..."/>
                        <div class="card-body">
                         <p class="card-text"></p>
                        </div>
                    </div>
                
                </div> 

             {/* DeckB */}
                <div id="DeckB">

                    <div class="card" style={{width: "20rem",height:"350px"}}>
                        <img id="card-img" src={potato} class="card-img-top" alt="..."/>
                        <div class="card-body">
                         <p class="card-text"></p>
                        </div>
                    </div>

                    <div class="card" style={{width: "20rem",height:"350px"}}>
                        <img id="card-img" src={herdsman} class="card-img-top" alt="..."/>
                        <div class="card-body">
                         <p class="card-text"></p>
                        </div>
                    </div>

                    <div class="card" style={{width: "20rem",height:"350px"}}>
                        <img id="card-img" src={seed} class="card-img-top" alt="..."/>
                        <div class="card-body">
                         <p class="card-text"></p>
                        </div>
                    </div>
                    
                </div>
            </div>    
            {/* bottom ends */}
        </div>
    )
}

export default invest;
