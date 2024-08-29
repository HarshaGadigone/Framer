import React from 'react'
import eight from './eight.css'
import arro from '../image/arro.png'
import emojistar1 from '../image/emojistar 1.png'
import helix21 from '../image/helix2 1.png'

function Eight() {
  return (
    <div class=" container-fluid">
      <div class="row">
          <div class="container width: 1200px height: 472px background: dark ">
             
             <div class="width: 540px height: 206px text-center">
                <br/><br/><br/><br/><br/><br/><br/>
                <h2>Sign up for free today</h2><br/>
                <p class="width: 447px height: 46px ">Celebrate the joy of accomplishment with an app designed <br/>to track your progress and motivate your efforts.</p><br/>
                <button class="bg-dark text-white p-2 rounded-3" id='arrobtn'>Get For Free</button>
                <div id='arro'>Learn more<img src={arro} ></img></div><br/><br/><br/><br/><br/><br/><br/>
                <img src={emojistar1} id='emojistar' class='img-fluid' alt='Responsive image ' className='d-lg-block d-md-block d-none'></img>
                 <img src={helix21} id='emo' class='img-fluid' alt='Responsive image ' className='d-lg-block d-md-block d-none'></img>
             </div>
          </div>
          
      </div>
    </div>
  )
}

export default Eight