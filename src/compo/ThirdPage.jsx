import React from 'react'
import Thirdpage from './Thirdpage.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import acme1 from '../image/acme 1.png'
import quantum1 from '../image/quantum 1.png'
import echo1 from '../image/echo 1.png'
import celestia1 from '../image/celestia 1.png'
import pulse1 from '../image/pulse 1.png'
import apex1 from '../image/apex 1.png'


function ThirdPage() {
  return (
      <div class=" grand_parent" id='third1'>
        <br/><br/>
         <div className='parents'>
             <div className='child'>  <img src={acme1}></img> </div>
             <div className='child'>  <img src={quantum1}></img></div>
             <div className='child'> <img src={echo1}></img></div>
             <div className='child'> <img src={celestia1}></img> </div>
             <div className='child'> <img src={pulse1}></img> </div>
             <div className='child'> <img src={apex1}></img></div>

         </div>
      </div>
  )
}

export default ThirdPage