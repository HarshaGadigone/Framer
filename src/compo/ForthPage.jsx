import React from 'react'
import Forth from './Forth.css'
import productii from '../image/Productii.png'
import one1 from '../image/one1.png'
import two2 from '../image/two2.png'
import three3 from '../image/three3.png'
import four4 from '../image/four4.png'
import pyramid from '../image/pyramid 1.png'
import torus from '../image/torus 1.png'

function ForthPage() {
  return (
    
  

<div class=" container-fluid"  id='contddl'>
    <div class="row">
    <div class=" col-12 col-6 col-3  ">
    <div className="container" id="vwvw">
          
        <div class="width: 100% height: 206px text-center">
                <br/><br/><br/><br/><br/><br/><br/>
                <h7>Boost your productivity</h7>
                <h2>A more effective way to track progress</h2><br/>
                 <p class="width: 447px height: 46px ">Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website in just minutes with the set of free components for Framer.</p><br/>
                 </div> 
        </div>
       </div>
       </div >
       <br/><br/>
       <div class=" container" >
    <div class="row">
    <div class=" col-12 col-6 col-3 ">
    <div ><img src={productii} id='product1'></img></div>
    
    </div>
    <div className='d-lg-block d-md-block d-none'><img src={pyramid} id='pro2'></img></div>
    <div className='d-lg-block d-md-block d-none'><img src={torus} id='product3'></img></div>
    </div>
    </div>
    <div class=" container-fluid" >
    <div class="row">
                 <div className='col-lg-3 col-md-6 col-12'><img src={one1}></img></div>
                 <div className='col-lg-3 col-md-6 col-12'><img src={two2}></img></div>
                 <div className='col-lg-3 col-md-6 col-12'><img src={three3}></img></div>
                 <div className='col-lg-3 col-md-6 col-12'><img src={four4}></img></div>
                
    </div>
</div>
</div>
    

  )
}

export default ForthPage