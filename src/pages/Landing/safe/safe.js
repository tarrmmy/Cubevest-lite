
import React from 'react';
import Nav from '../../../components/Navbar/Nav';
import './safe.css';
import phone1 from './phone1.png';
import Secondfooter from '../../../components/Secondfooter/Secondfooter';
import Footer from '../../../components/Footer/Footer';

const safe = () => {
    const Disciplined = [
        {
        img:'',
        name:'You’re in control',
        text:'You can lock for as little as 10 days or as much as 1000 days.'
        },
        {
        img:'',
        name:'Manage your money',
        text:'Set aside funds for a fixed period of time without having access to it until maturity.'
        },
        {
        img:'',
        name:'Earn interest upfront',
        text:'Up to 12.5% interest per annum, paid upfront.'
        }
    ]

    return (
        <div>
           <Nav />
             
           <div className='lock'>
              <div className='lock-left'>
                  <h1 className='text-start'>Safe to lock</h1>
                 <p className='text-start'>
                 Lock funds away for a fixed period of time to avoid spending temptation.<br/> 
                 Earn up to 12.5% p.a. paid upfront.
                 </p>
                 <button id='avoid'>Start Saving Today</button>
              </div>
              <div className='lock-right'>
               <img src={phone1}/>
              </div>
          </div>
          

          <div className='disciplined'>
                  <div className='disciplined-center'>
                    <h1>Stay disciplined and avoid temptation</h1>
                    <p>Lock funds to avoid temptations. Earn your interest upfront and paid instantly.</p>
                  </div>
                  <div className='disciplined-map'>
                  {Disciplined.map( discipline => (
                       <div className='disciplined-design'>
                           <img src={discipline.img} alt='photo'></img>
                           <h4 className='different text-start'>{discipline.name}</h4>
                           <p className='text-start'>{discipline.text}</p>
                       </div>
                   ))}
                  </div>
              </div>

              <div className='temptation'>
          <h1>Avoid temptations & lock your money.</h1>
          <p>Safelock allows you to set money aside for a fixed period of time without having access to it until maturity. It’s like having your own custom fixed deposit.</p>
        </div>

        <Secondfooter />
        <Footer />





        </div>
    )
}

export default safe
  
