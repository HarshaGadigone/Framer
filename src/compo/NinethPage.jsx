import React from 'react'
import nine from './nine.css'
import logosaas from '../image/logosaas.png'
import so1 from '../image/so1.png'
import so2 from '../image/so2.png'
import so3 from '../image/so3.png'
import so4 from '../image/so4.png'
import so5 from '../image/so5.png'
import so6 from '../image/so6.png'

import Product from '../image/Product.png'
import Resources from '../image/Resources.png'
import Security from '../image/Security.png'
import Company from '../image/Company.png'


function NinethPage() {
  return (
    <div class=" container-fluid bg-dark text-white">
     <div class="row">
        <div class="col-lg-6 col-md-6 co-12 ">
            <br/><br/>
            <div><img src={logosaas}></img></div><br/><br/>
             <div ><p>Effortlessly turn your ideas into <br/>a fully functional, responsive,<br/> no-code SaaS website.</p></div>
             <br/><br/><br/>
             <div >
                <img src={so1}></img>
                 <img src={so2}></img>
                <img src={so3}></img>
                <img src={so4}></img>
                <img src={so5}></img>
                <img src={so6}></img>
             </div><br/>
        </div>
        <div class="col-lg-6 col-md-6 col-12">
        <br/><br/>
         <div class="row bg-dark width: 420px height: 239px">
            
             <div class="col-lg-3 text-white">
              <div><img src={Product}></img></div>
             </div>
             <div class="col-lg-3">
             <div><img src={Company}></img></div>
             </div>
             <div class="col-lg-3">
             <div><img src={Resources}></img></div>
             </div>
             <div class="col-lg-3 text-white">
              <div><img src={Security}></img></div>
             </div>
             

        </div>
        </div>
     </div>
    </div>
  )
}

export default NinethPage