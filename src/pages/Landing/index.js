import React from 'react';
import Nav from '../../components/Navbar/Nav';
import './index2.css';
import headerImg from './headerImg.png';
import security from './security.png';
import invest from './invest.png'
import Secondfooter from '../../components/Secondfooter/Secondfooter';


const index = () => {
  const cubevestLite=[
    {
    name:'Automated Savings',
    text:'Build a dedicated savings faster on your terms automatically or manually.',
    title:'Regular Savings'
    },
    {
    name:'Fixed Savings',  
    text:'Lock money away for a fixed duration with no access to it until maturity. It’s like having a custom fixed deposit.',
    title:'Safe to lock'
    },
    {
    name:'Goal-oriented Savings',
    text:'Reach all your savings goals faster. Save towards multiple goals on your own or with a group.',
    title:'Target Savings'
    }]
    
  return (
    <div>
      <Nav />
                     {/* LANDING START  */}
       <div className='landing-wrapper'>     
          <div className='landing-wrapper-left'>                     
           <h1 className='text-start'>The Better Way <br/> to Save & Invest.</h1>
           <p className='text-start'>PiggyVest helps over 3 million customers achieve their financial <br/> goals by helping them save and invest with ease.</p>
           <button className='create'>Create free account</button>       
           </div>                
           <div className='landing-wrapper-right'>
             <img src={headerImg}></img>
          </div>
       </div> 
                      {/* LANDING END */}
                        {/* SECURITY CATEGORY */}
    <div className='security'>
          <img className='security-img' src={security}></img>
           <div className='security-box'>
                <h1 className="text-start">Your security is our priority</h1>
                <p className="text-start">PiggyVest uses the highest level of Internet Security and it is secured by 256 bits SSL security <br/>
                  encryption to ensure that your information is comepletely protected from fraud.</p>
                <p className="learn text-start"><a style={{textDecoration:'none'}} href='https://google.com'>Learn more</a></p>
           </div>
    </div>
                      {/* SECURITY END */}
                       {/* SAVINGS CATEGORY  */}
            <div className='savings-category'>
              <div className='build-savings-left'>
                 <h1 className='text-start'>4 ways to build <br/> your savings</h1>
                 <p className='text-start'>Earn 5%-15% when you save with any <br/> of these PiggyVest plans.</p>
                 <button id='start-saving'>Start Saving</button>
              </div>
              <div className='build-savings-right col-6'>
                 {cubevestLite.map(cubevest => (
                   <div className='cubevest'>
                      <h2 className='cubevest-name text-start'>{cubevest.name}</h2>
                      <p className='cubevest-text text-start'>{cubevest.text}</p>
                      <p className='cubevest-title text-start'>{cubevest.title}</p>
                   </div>
                 ))}
              </div>
            </div>
                        {/* SAVINGS END */}
          <div className='investment'>
            <div className='investment-left'>
              <img className='invest-img' src={invest}></img>
            </div>
            <div className='investment-right'>
               <h1 className='text-start'>Access investment <br/> opportunities</h1>
               <p className='text-start '>Invest securely and confidently on the go. Grow your <br/>
                money confidently by investing in pre-vetted investment <br/> opportunities.</p>
               <p className="learn text-start">Learn more about Investments</p>
            </div>
          </div>
          <Secondfooter />
    </div>    
  )
}

export default index;



 







