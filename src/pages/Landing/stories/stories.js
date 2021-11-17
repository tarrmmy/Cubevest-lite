
import React from 'react';
import Nav from '../../../components/Navbar/Nav';
import './stories.css';
import picture from './picture.png'
import tag from './tag.jpg'
import ben from './ben.jpg'
import pet from './pet.jpg'
import muh from './muh.jpg'
const stories = () => {
    return (
      <div>
         <Nav />
       <div className="First">
         <div className="a">
           <h1 className="love">Loved by our<br/>Customers</h1>

           <h4 className="story">Stories of happy savers who PiggyVest has helped or is<br/>
           helping save for what truly matters to them.</h4>

           <button className="but">Add your story</button>
         </div>

         <div className="img">
            <img className="pic" src={picture}/>
         </div>
       </div>
      

        <h1 className="recent">Recently verified customer stories</h1>


        {/* card */}
        <div className="cards">

        <div class="card" style={{width: "20rem",height:"350px"}}>
            <img src={tag} class="card-img-top" alt="..."/>
            <h5 className="title">Muiz MBE</h5>
            <div class="card-body">
             <p class="card-text">Wow! Where has Cubevest been all<br/>my adult life?.... I wish I knew about<br/>Cubevest in my early days.</p>
            </div>
        </div>

        <div class="card" style={{width: "20rem",height:"350px"}}>
            <img src={pet} class="card-img-top" alt="..."/>
            <h5 className="title"> Sammy K</h5>
            <div class="card-body">
            <p class="card-text">I used to have a problem of spending<br/>money on the go. When my brother<br/>told me about Piggyvest I was reluctant. But I am happy he.</p>
            </div>
        </div>

        <div class="card" style={{width: "20rem",height:"350px"}}>
             <img src={ben} class="card-img-top" alt="..."/>
             <h5 className="title">Ibraheem</h5>
            <div class="card-body">
             <p class="card-text">PiggyVest has helped my life truly in<br/>many ways. I was kinda restless,<br/>helpless, but PiggyVest gave me the.</p>
            </div>
        </div>

        </div>

        <div>
        <div id="set" class="card" style={{width: "20rem",height:"350px"}}>
             <img src={muh} class="card-img-top" alt="..."/>
             <h5 className="title">Ibraheem</h5>
            <div class="card-body">
             <p class="card-text">PiggyVest has helped my life truly in<br/>many ways. I was kinda restless,<br/>helpless, but PiggyVest gave me the.</p>
            </div>
        </div>
        </div>
        {/* card ends */}
      </div>
    )
}

export default stories;


