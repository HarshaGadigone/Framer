import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './FirstPage.css'
import Offcanvas from "react-bootstrap/Offcanvas";

import Icons from "../image/Icons.png"
import Logosaas from "../image/logosaas.png"
import Vector from "../image/Vector.png"
import Vector2 from "../image/Vector2.png"

function FirstPage() {
  return (
    <Container fluid>

  <div>

    <Row>
        <Col style={{
            background: "black",
            height: "auto",
            textAlign: "center",
            paddingTop: "5px",
          }}
          sm={12}>
            <div className='d'> {/*d-sm-none*/}
               <div id='a1' className="'d-lg-block, d-md-none, d-sm-none'"><h1 id='a2'>This page is included in a free SaaS Website Kit.</h1></div>
               <div id='a3' ><h1 id='a4'>View the complete Kit<div><img src={Icons}></img></div></h1></div>
            </div>
        </Col>
    </Row>
       <Row>
        <div id='color1'>
        <img src={Logosaas} id='logosaas'></img>
        <div class='d-lg-block d-md-block col-sm-none col-none'>
        <h6 id='made'>made by</h6>
        <img src={Vector} id='vector' ></img>
        <img src={Vector2} id='vector2'></img>
        </div>
              <div class="Container">
                 <div class="offcanvas offcanvas-end"  id='demo'>
                    <div class="offcanvas-header">
                      <h1 >hhh</h1>
                         <button type='button' class="btn-close" data-bs-dismiss="offcanvas"></button>
                    </div>
                    <div class="offcanvas-body">
                         <ul class="list-group list-group-flush" >
                            <li>About</li>
                            <li>Feature</li>
                            <li>Customer</li>
                            <li>Updates</li>
                            <li>Help</li>
                            <button class="bg-info">Get for Free</button>

                         </ul>
                    </div>
                 </div>
                 </div>
              
             
            </div>
            
       </Row>
       
     

     </div>
     </Container>
      
  )
}


export default FirstPage