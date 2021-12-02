
import React from 'react';
import Nav from '../../../components/Navbar/Nav';
import './regular.css';
import phone from './phone.png';
import icon1 from './icon1.png';
import icon2 from './icon2.png';
import icon3 from './icon3.png';
import Secondfooter from '../../../components/Secondfooter/Secondfooter';
import Footer from '../../../components/Footer/Footer';


const regular = () => {
    const Thinking = [
        {
        img:{icon1},
        name:'Save automatically',
        text:'Choose between automatic daily,weekly or monthly savings. Once you choose, our system does the rest for you. You’re in control, and can always change your settings anytime.'
        },
        {
        img:{icon2},
        name:'Save on the go',
        text:'Don’t fancy automatic savings? No problem, you can manually top up your Piggybank savings at anytime, anywhere.'
        },
        {
        img:{icon3},
        name:'build displines',
        text:'With four free withdrawal days in the year, you are less tempted to spend your savings and meet your savings goals faster.'
        }
    ]
    return (
        <div>
           <Nav />
                            {/* REGULAR START */}
          <div className='regular'>
              <div className='regular-left'>
                  <h1 className='text-start'>Regular savings</h1>
                 <p className='text-start'>Strict daily, weekly or monthly automatic savings.<br/>
                 Earn up to 10% p.a.</p>
                 <button id='today'>Start Saving Today</button>
              </div>
              <div className='regular-right'>
               <img src={phone}/>
              </div>
          </div>
                            {/* REGULAR END */}
            <div className='thinking'>
                <div className='thinking-center'>
                    <h1>Save without thinking about it.</h1>
                    <p>Enjoy automated savings, quick manual savings top up and competitive interest rates.</p>
                </div>
                <div className='thinking-map'>
                {Thinking.map( think => (
                    <div className='think-design'>
                        <img src={icon1, icon2, icon3} style={{width:'50px',height:'50px'}}></img>
                        <h3 className='different1 text-start'>{think.name}</h3>
                        <p className='text-start'>{think.text}</p>
                    </div>
                ))}
                </div>
            </div>

            <div className='small-small'>
          <h1>Build your savings small small!</h1>
          <p>Save periodically, automatically or manually. You can also save as you go, on your own terms. You’re the boss of your savings, choose how you want to save.</p>
        </div>
        <Secondfooter />
        <Footer />
       
        </div>
    )
}

export default regular;



{/* <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}