import React from 'react'
import sevanth from './sevanth.css'
import { BiHeading } from 'react-icons/bi'
import t1 from '../image/t1.png'
import t2 from '../image/t2.png'
import t3 from '../image/t3.png'
import t4 from '../image/t4.png'
import t5 from '../image/t5.png'
import t6 from '../image/t6.png'
import t7 from '../image/t7.png'
import t9 from '../image/t9.png'
import t10 from '../image/t10.png'

function SeventhPage() {
  return (
    <div class=" container-fluid" >
            <div class="row">
               <div class="container width: 1200px height: 1055px ">
               <br/><br/><br/>
                <p class="text-center">Testimonials</p><br/>
                <h2 class="text-center">What our users say</h2>
                <br/><br/>
               </div>
            </div>
            <div class="row ">
                    <div class="container width: 1200px height: 786px;">
                     <div class="row">
                      <div class="col-lg-4 col-md-4 col-12 "><img src={t1}></img></div>
                      <div class="col-lg-4 col-md-4 col-12"><img src={t2}></img></div>
                      <div class="col-lg-4 col-md-4 col-12"><img src={t3}></img></div>
                      
                     </div>
                     <div class="row">
                      <div class="col-lg-4 col-md-4 col-12 "><img src={t4}></img></div>
                      <div class="col-lg-4 col-md-4 col-12"><img src={t5}></img></div>
                      <div class="col-lg-4 col-md-4 col-12"><img src={t6}></img></div>
                      
                     </div>
                     <div class="row">
                      <div class="col-lg-4 col-md-4 col-12 "><img src={t7}></img></div>
                      <div class="col-lg-4 col-md-4 col-12"><img src={t9}></img></div>
                      <div class="col-lg-4 col-md-4 col-12"><img src={t10}></img></div>
                      
                     </div>
                    </div>
            </div>
        </div>
  )
}

export default SeventhPage