import React from 'react'
import mediademo from './mediademo.css'
import visual from './image/Visual.png'
import Icons from './image/Icons.png'
import cylinder1 from './image/cylinder 1.png'
import halfto from './image/halfto.png'
function MediaDemo() {
  return (
    <div id='min'>
       
        <div class="text">
            <div id='vers'>Version 2.0 is here</div>
            <h1>Pathway to productivityt</h1>
            <p>Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.</p>

            <div > <button style={{width: "fit-content"}} id='pathway-btn'>Get for Free</button></div>
                        <div style={{width: "fit-content"}} id='pathway-learn'>Learn more<img src={Icons}></img></div>
        </div>
        <div class="imge">
          <img src={visual} id='img'></img>
          <img src={cylinder1} id='cyli'></img>
          <img src={halfto} id='half'></img>
        </div>
    </div>
  )
}

export default MediaDemo