import React from 'react';
import Nav from '../../../components/Navbar/Nav';
import './stories.css';
import picture from './picture.png'
import tag from './tag.jpg'
import ben from './ben.jpg'
import pet from './pet.jpg'
import muh from './muh.jpg'
import single from './single.png'
import  Footer from '../../../components/Footer/Footer';
const stories = () => {
  const Arc = [
    {
      image: tag,
      name: 'MUIZ MBE',
      content: 'Wow! Where has Cubevest been all my adult life?.... I wish I knew about Cubevest in my early days.'

    },
    {
      image: pet,
      name: 'Antony',
      content: 'I used to have a problem of spending money on the go. When my brother told me about Piggyvest I was reluctant. But I am happy he.'
    },
    {
      image: ben,
      name: 'Samantha',
      content: 'PiggyVest has helped my life truly in many ways. I was kinda restless, helpless, but PiggyVest gave me the.'
    },
    {
      image: muh,
      name: 'Dave',
      content: 'PiggyVest has helped my life truly in many ways. I was kinda restless, helpless, but PiggyVest gave me the.'
    }
  ]
    return (
      <div> 
        <Nav />
        <div className="First">
          <div className="First-A">
            <h1 className="love">Loved by our<br/>Customers</h1>
            <h4 className="story">Stories of happy savers who PiggyVest has helped or is<br/>
            helping save for what truly matters to them.</h4>
            <button className="but">Add your story</button>
          </div>
          <div className="First-B">
            <img className="pic" src={picture}/>
          </div>
        </div>
        <h1 className="recent">Recently verified customer stories</h1>

        {/* card */}
        {Arc.map(rep => (
          <div id="carddd" class="card" style={{width: "20rem",height:"350px"}}>
            <img id="photo-img"  src={rep.image} class="card-img-top" alt="..."/>
            <h5 className="title">{rep.name}</h5>
            <div class="card-body">
            <p class="card-text">{rep.content}</p>
            </div>
              
          </div>
        )
        )}

          <div className='secondfooter'>
            <div className='secondfooter-left'>
              <img src={single}/>
            </div>
            <div className='secondfooter-right'>
              <h1 className='text-start'>3 Million + customers</h1>
              <p className='text-start'>Since launching in 2016, over 3,000,000 people have <br/>
              used PiggyVest to manage their money better, avoid <br/>
              over-spending and be more accountable.</p>
              <a href='/signup'><button className='close'>Create free account</button></a>
            </div>
          </div>
        <Footer/>
      </div>
    )
}

export default stories;


