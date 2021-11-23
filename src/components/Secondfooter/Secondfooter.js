import React from 'react';
import './Secondfooter.css';


const Secondfooter = () => {
    return (
        <div className='secondfooter'>
            <div className='secondfooter-left'>
           
            </div>
            <div className='secondfooter-right'>
              <h1 className='text-start'>3 Million + customers</h1>
              <p className='text-start'>Since launching in 2016, over 3,000,000 people have <br/>
               used PiggyVest to manage their money better, avoid <br/>
               over-spending and be more accountable.</p>
           <a href='/signup'><button className='close'>Create free account</button></a>
            </div>
        </div>
    )
}

export default Secondfooter;
