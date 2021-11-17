
import React from 'react';
import Nav from '../../../components/Navbar/Nav';
import './invest.css';
import phone from './phone.png'
// import card1 from './card1.png'
// import card2 from './card2.png'
import icon1 from './icon1.png'
import icon2 from './icon2.png'
import icon3 from './icon3.png'
const invest = () => {
    return (
        <div>
          <Nav />
            <div className="cart">
              <div id="invest">
                <h1>Invest on the go.</h1>
                <h5 className="text-center">Invest securely and confidently on the go.<br/>
                    Up to 25% returns, 6-12 month duration.</h5>
                <button className="butt">Start Saving Today</button>
              </div>
               <img id="telephone" src={phone} />
               {/* <img id="tele" src={card1}/>
               <img id="tele" src={card2}/> */}
            </div>
              <div id="sem">  
                <h1 id="sip">Simple investments with great returns</h1>
                </div> 
                <h4>Investments are made readily accessible to everyone</h4>
               

               {/* divs */}
            <div id="divs">
                <div id="up">
                    <img id="icons" src={icon1}/>
                    <h3 id="vest">Investments simplified</h3>
                    <h4 id="h4">With minimum investments starting<br/>as low as N5,000, investment is no<br/>longer out of reach. Everyone is<br/>welcome.</h4>
                </div>
                
                <div id="up">
                    <img id="icons" src={icon2}/>
                    <h3 id="vest">Invest confidently</h3>
                    <h4 id="h4">All listed investments are properly<br/>due diligenced and highly secured<br/>opportunities.</h4>
                </div>
                
                <div id="up">
                    <img id="icons" src={icon3}/>
                    <h3 id="vest">Diversify your portfolio</h3>
                    <div id="h4">Invest in various industries such as<br/>fixed income instruments, agriculture,<br/>transportation, etc.</div>
                </div>
                
                
            </div>   

        </div>
    )
}

export default invest;
