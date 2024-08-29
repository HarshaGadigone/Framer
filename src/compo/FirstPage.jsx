import React from 'react';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';

import NavDropdown from 'react-bootstrap/NavDropdown';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';

import './FirstPage.css'
import Offcanvas from "react-bootstrap/Offcanvas";

import Icons from "../image/Icons.png"
import Logosaas from "../image/logosaas.png"
import Vector from "../image/Vector.png"
import Vector2 from "../image/Vector2.png"

function FirstPage() {
  return (
   <div class=" container-fluid" >
      <div  class="row bg-dark w-100%">
      <div className='d'> {/*d-sm-none*/}
               <div id='a1' className="'d-lg-block, d-md-none, d-sm-none'"><h1 id='a2'>This page is included in a free SaaS Website Kit.</h1></div>
               <div id='a3' ><h1 id='a4'>View the complete Kit<div><img src={Icons}></img></div></h1></div>
            </div>
      </div>
          <div class="row" id='row21' >
         <Navbar expand="lg" className="bg-body-tertiary" id='row2'>
      <Container >
        <Navbar.Brand href="#home">
        <img src={Logosaas} id='logosaas'></img>
        <div class='d-lg-block d-md-block col-sm-none col-none'>
        <h6 id='made'>made by</h6>
        <img src={Vector} id='vector' ></img>
        <img src={Vector2} id='vector2'></img>
        </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#link">Feature</Nav.Link>
            <Nav.Link href="#link">Customer</Nav.Link>
            <Nav.Link href="#link">Updates</Nav.Link>
            <Nav.Link href="#link">Help</Nav.Link>
            <button class="bg-dark text-white">Get for Free</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
         </div>
          </div>

      
  )
}

export default FirstPage