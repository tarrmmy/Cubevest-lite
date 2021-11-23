
import React from 'react';
import Nav from '../../../components/Navbar/Nav';
import './stories.css';
import picture from './picture.png'
import tag from './tag.jpg'
import ben from './ben.jpg'
import pet from './pet.jpg'
import muh from './muh.jpg'
import Secondfooter from '../../../components/Secondfooter/Secondfooter';
import  Footer from '../../../components/Footer/Footer';
const stories = () => {
  const Arc = [
    {
      image: {tag},
      name: 'MUIZ MBE',
      content: 'Wow! Where has Cubevest been all my adult life?.... I wish I knew about<br/>Cubevest in my early days.'

    },
    {
      image: {pet},
      name: 'Antony',
      content: 'I used to have a problem of spending money on the go. When my brother told me about Piggyvest I was reluctant. But I am happy he.'
    },
    {
      image: {ben},
      name: 'Samantha',
      content: 'PiggyVest has helped my life truly in many ways. I was kinda restless, helpless, but PiggyVest gave me the.'
    },
    {
      image: {muh},
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
        {/* <div className="cards"> */}

            {Arc.map(rep => (
          <div class="card" style={{width: "20rem",height:"350px"}}>
             
                 <img id="photo-img"  src={tag} class="card-img-top" alt="..."/>
              <h5 className="title">{rep.name}</h5>
              <div class="card-body">
              <p class="card-text">{rep.content}</p>
              </div>
              
          </div>
            ))}

          {/* <div class="card" style={{width: "20rem",height:"350px"}}>
              <img id="photo-img" src={pet} class="card-img-top" alt="..."/>
              <h5 className="title"> Sammy K</h5>
              <div class="card-body">
              <p class="card-text">I used to have a problem of spending<br/>money on the go. When my brother<br/>told me about Piggyvest I was reluctant. But I am happy he.</p>
              </div>
          </div>

          <div class="card" style={{width: "20rem",height:"350px"}}>
              <img id="photo-img" src={ben} class="card-img-top" alt="..."/>
              <h5 className="title">Ibraheem</h5>
              <div class="card-body">
              <p class="card-text">PiggyVest has helped my life truly in<br/>many ways. I was kinda restless,<br/>helpless, but PiggyVest gave me the.</p>
              </div>
          </div> */}

        {/* </div> */}

        {/* <div>
          <div id="set" class="card" style={{width: "20rem",height:"350px"}}>
               <img id="photo-img" src={muh} class="card-img-top" alt="..."/>
               <h5 className="title">Ibraheem</h5>
              <div class="card-body">
                <p class="card-text">PiggyVest has helped my life truly in<br/>many ways. I was kinda restless,<br/>helpless, but PiggyVest gave me the.</p>
              </div>
          </div>
        </div> */}
        {/* card ends */}
        <Secondfooter/>
        <Footer/>
      </div>
    )
}

export default stories;


