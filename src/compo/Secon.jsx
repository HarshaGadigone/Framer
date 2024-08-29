import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import second from'../compo/second.css'
import Icons from '../image/Icons.png'
import Visual from '../image/Visual.png'
import cylinder1 from '../image/cylinder 1.png'
import halfto from '../image/halfto.png'

function Secon() {
  return (
    <div className='container-fluid ' id='main'>
       
     
        <div class='container'  >
          <div className='row'>

      <div className='col-lg-6 col-md-6 col-12  '>
        
                <div id='pathway'>
                    <div id='version20'>Version 2.0 is here</div>
                    <h1 id='pathway-h1'>Pathway to productivity</h1>
                    <div style={{ width: "457px",height: "99px"}}> <p id='pathway-p'>Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.</p></div>
                    <div > <button style={{width: "fit-content"}} id='pathway-btn'>Get for Free</button>
                        <div style={{width: "fit-content"}} id='pathway-learn'>Learn more<img src={Icons}></img></div>
                    </div>
                </div>
            </div>
        <div className='col-lg-6 col-md-6 col-12'>
            <div class="container ">
                 <div className=' d-lg-block d-md-none d-sm-none d-none'><img src={cylinder1} id='cylinder1' ></img></div>
                  <div><img src={Visual} id='visual'></img></div>
                  <div className=' d-lg-block d-md-none d-sm-none d-none'><img src={halfto} id='halfto' ></img></div>
            </div>
        </div>
        
     </div>
     </div>
    </div>
  )
}

export default Secon