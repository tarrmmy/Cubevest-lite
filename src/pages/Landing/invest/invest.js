
import React from 'react';
import Nav from '../../../components/Navbar/Nav';
import './invest.css';
import phone from './phone.png'
import icon1 from './icon1.png'
import icon2 from './icon2.png'
import icon3 from './icon3.png'
import cashew from './cashew.jpg'
import cassava from './cassava.jpg'
import herdsman from './herdsman.jpg'
import orange from './orange.jpg'
import potato from './potato.jpg'
import seed from './seed.jpg'
import Secondfooter from '../../../components/Secondfooter/Secondfooter';
import Footer from '../../../components/Footer/Footer';
import backg from './backg.png'

const invest = () => {

    const Studio = [
                {
                    photos:orange,
                    topic:'Credit Financing: Recyclan Global',
                    Price:'#5000',
                    numb:'2345',
                    per:'per unit',
                    investors:'Investors',

                },
                {
                    photos:cashew,
                    topic:'Cashew Nut Investment',
                    Price:'#5000',
                    numb:'1257',
                    per:'per unit',
                    investors:'Investors',

                },
                {
                    photos:cassava,
                    topic:'Cassava Farmland Investment',
                    Price:'#5000',
                    numb:'3011',
                    per:'per unit',
                    investors:'Investors',

                },
                {
                    photos:potato,
                    topic:'Sweet Potato Farmland Investment',
                    Price:'#5000',
                    numb:'1875',
                    per:'per unit',
                    investors:'Investors',

                },
                {
                    photos:herdsman,
                    topic:'Cattle Herder Stock Program Investment',
                    Price:'#5000',
                    numb:'2017',
                    per:'per unit',
                    investors:'Investors',

                },
                {
                    photos:seed,
                    topic:'Seasame Seed Farmland Investment',
                    Price:'#5000', 
                    numb:'2111',
                    per:'per unit',
                    investors:'Investors',   
                }

    ]
    return (
        <div>
          <Nav />
            <div className='target'>
                <div className='target-left'>
                 
                 <h1 className='text-start'>Invest on the go.</h1>
                 <p className='text-start'>Invest securely and confidently on the go.<br/> Up to 25% returns, 6-12 month duration.</p>
                 <button className="invest-butt">Start Saving Today</button>
               
                </div>

                <div className='target-right'>
                 
                 <img src={phone} alt=''/>
               
                </div>

            </div>

                <div id="semin">  

                  <h1 id="sip">Simple investments with great returns</h1>

                </div> 
                <h4 id="investment">Investments are made readily accessible to everyone</h4>
               

               {/* divs */}
            <div id="divs">

                <div id="up">
                    <img id="up1" src={icon1} alt=''/>
                    <h3 id="up2">Investments simplified</h3>
                    <h4 id="up3">With minimum investments starting<br/>as low as N5,000, investment is no<br/>longer out of reach. Everyone is<br/>welcome.</h4>
                </div>
                
                <div id="up">
                    <img id="up1" src={icon2} alt=''/>
                    <h3 id="up2">Invest confidently</h3>
                    <h4 id="up3">All listed investments are properly<br/>due diligenced and highly secured<br/>opportunities.</h4>
                </div>
                
                <div id="up">
                    <img id="up1" src={icon3} alt=''/>
                    <h3 id="up2">Diversify your portfolio</h3>
                    <div id="up3">Invest in various industries such as<br/>fixed income instruments, agriculture,<br/>transportation, etc.</div>
                </div>
                
            </div>    
          
            <div className='Royal'>

                <div id="Royal-text">

                    <h1>We’ve made it easier for<br/>anyone to get started.</h1>
                    <p>With as little as NGN5000, you can now access pre-vetted<br/>low-medium risk primary and secondary investment<br/>opportunities. No hidden fees/charges. Thorough due<br/>diligence and pre-vetting on all investments are carried<br/>out for maximum safety.</p>
                
                </div>
                <img src={backg} id="Royal-img" alt=''/>
            
            </div>

            <h1 id="cent">Recent Opportunities on Investify</h1>
            
            <div className='challenges-map'>
                <div className="row row-cols-1 row-cols-md-3 g-4">      
                    {Studio.map( studio => (

                        <div className="col">

                            <div id="Book" className="card">

                                <img src={studio.photos} className="card-img-top" id="top-img" alt=""/>
                                <div className="card-body">

                                    <h2 id="cad" className="card-title">{studio.topic}</h2>
                                    <div id='roww'>
                                        <p id="roww1" className='text col-auto mb-20'>{studio.Price}</p>
                                        <p id="roww1" className='text col-auto mb-20'>{studio.numb}</p>
                                    </div>

                                    <div id='rowww'>
                                        <p id="rowww1" className='text col-auto mb-20'>{studio.per}</p> 
                                        <p id="rowww1" className='text col-auto mb-20'>{studio.investors}</p> 
                                    </div>
                                
                                </div>
                            
                            </div>
                        
                        </div> 
                  
                  ))}
               
                </div>
            
            </div>
            <Secondfooter />
            <Footer />
        </div>
    )
}


export default invest;
