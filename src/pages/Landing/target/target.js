
import React from 'react';
import Nav from '../../../components/Navbar/Nav';
import './target.css';
import phone4 from './phone4.png';
import easter from './easter.jpg';
import nysc from './nysc.jpg';
import ileya from './ileya.jpg';
import Secondfooter from '../../../components/Secondfooter/Secondfooter';
import Footer from '../../../components/Footer/Footer';


const target = () => {
    const Multiple = [
        {
        img:'',
        name:'Your targets, your rules',
        text:'Customise the rules and duration of your target savings as you wish. From public or private mode, automated savings, or multiple targets, you’re in control.'
        },
        {
        img:'',
        name:'Save with a group',
        text:'Challenge yourself to meet your goals by saving towards a common goal with a group. No one has access to your funds but you.'
        },
        {
        img:'',
        name:'Daily interest accrued',
        text:'Earn 9% per annum to help you reach your goal faster. Think of it as a reward for meeting your target.'
        }
    ]
   
    const Challenges = [
      {
       image:{easter},
       name:'NABAF CONTRIBUTION',
       text1:'10',
       text2:'#500k',
       text3:'99', 
       text4:'members',
       text5:'per member',
       text6:'days left' 
      },
      {
       image:{ileya},
       name:'Plat Ileya Plan',
       text1:'10',
       text2:'#500k',
       text3:'99' ,
       text4:'members',
       text5:'per member',
       text6:'days left' 
      },
      {
       image:{nysc},
       name:'Saving for Detty December\'2022',
       text1:'10',
       text2:'#500k',
       text3:'99', 
       text4:'members',
       text5:'per member',
       text6:'days left' 
      },
      {
       image:{easter},
       name:'2022 Easter',
       text1:'10',
       text2:'#500k',
       text3:'99' ,
       text4:'members',
       text5:'per member',
       text6:'days left' 
      },
      {
       image:{ileya},
       name:'2022: The year of the bag',
       text1:'10',
       text2:'#500k',
       text3: '99',
       text4:'members',
       text5:'per member',
       text6:'days left' 
      },
      {
      image:{ileya},
      name:'JLAP PURE JUICER',
      text1:'10',
      text2:'#500k',
      text3:'99'  ,
      text4:'members',
       text5:'per member',
       text6:'days left' 
      }
    ]
    return (
        <div>
            <Nav />
            <div className='target'>
               <div className='target-left'>
                 <h1 className='text-start'>Target Savings</h1>
                 <p className='text-start'>Reach all your unique savings goals, individually or as a group.<br/>
                 Earn up to 9% p.a.</p>
                 <button id='green'>Start Saving Today</button>
               </div>
               <div className='target-right'>
                 <img src={phone4}></img>
               </div>
            </div>
       
            <div className='multiple'>
                  <div className='multiple-center'>
                    <h1>Save towards multiple goals</h1>
                    <p>Target Savings helps you get there faster. You can even team up with others to reach a collective target.</p>
                  </div>
                  <div className='multiple-map'>
                  {Multiple.map( multi => (
                       <div className='multiple-design'>
                           <img src={multi.img} alt='photo'></img>
                           <p className='different text-start'>{multi.name}</p>
                           <p className='text-start'>{multi.text}</p>
                       </div>
                   ))}
                  </div>
              </div>
        
        <div className='special'>
          <h1>Saving ‘just because’ is great, but saving for something special is a lot of fun.</h1>
          <p>Got a savings goal in mind? We’ll help you reach it! Saving for a new phone? Check. Dad’s surprise birthday? Check. A new car, special vacation? Check and check. Target Savings helps you reach all your savings goals easily and faster.</p>
        </div>
      
        <div className='challenges'>
                  <div className='challenges-center'>
                    <h1>Recent Public Saving Challenges</h1>
                  </div>
                  <div className='challenges-map'>
                    <div className="row row-cols-1 row-cols-md-3 g-4">      
                    {Challenges.map( challenge => (
                  <div className="col">
                    <div className="card">
                      <img src={ileya} className="card-img-top" alt="photo"/>
                      <div className="card-body">
                        <h2 className="card-title">{challenge.name}</h2>
                        <div className='row'>
                          <p className='text col-auto mb-20'>{challenge.text1}</p>
                           
                          <p className='text2 text col-auto mb-20'>{challenge.text2}</p>
                          
                          <p className='text2 text col-auto mb-20'>{challenge.text3}</p>
                         
                        </div>
                      </div>
                    </div>
                  </div> 
                   ))}
                    </div>
  
                  
                  </div> 
                 </div> 
            <Secondfooter />
            <Footer />
        </div>
    )
}

export default target;
