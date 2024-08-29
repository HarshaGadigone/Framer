import React from "react";
import fifth from "./fifth.css";
import cub from '../image/cub.png'
import cub2 from '../image/cub2.png'

import Card from 'react-bootstrap/Card';

function FifthPage() {
  return (
    <div class=" container-fluid">
        
      <div class=" col-12 col-6 col-3  ">
        <div className="container" id="vwvw">
        
        <div class="width: 100% height: 206px text-center">
                <br/><br/><br/><br/><br/><br/><br/>
                <h7 id="boot_your2">Everything you need</h7>
                <h2>Streamlined for easy management</h2><br/>
                 <p class="width: 447px height: 46px "> Enjoy customizable lists, team work tools, and smart tracking
                  all in one place. Set tasks, get reminders, and see your
                  progress simply and quickly.</p><br/>
                 </div> 
        </div>
      </div>
      <br/><br/><br/>
      <div class=" container" id="cardss" >
           <div class="row" id="rowws">
             <div class=" col-lg-6 col-md-12 col-12  ">
                   <Card style={{ width: '20rem', height:'auto' ,  boxShadow: '0 7px 24px 0 #24262b'}} id="card1">
                   <Card.Img variant="top" src={cub} />
                    <Card.Body>
                    <Card.Title>Integration ecosystem</Card.Title>
                      <Card.Text>
                      Enhance your productivity by connecting with your favorite tools, keeping all your
                                   essentials in one place.
              </Card.Text>
        
      </Card.Body>
    </Card>

             </div>
                 <div class="col-lg-6 col-md-12 col-12 ">
                 <Card style={{ width: '20rem' ,boxShadow: '0 7px 24px 0 #24262b' }}>
                   <Card.Img variant="top" src={cub2} />
                    <Card.Body>
                    <Card.Title>Goal setting and tracking</Card.Title>
                      <Card.Text>
                      Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.
              </Card.Text>
        
      </Card.Body>
    </Card>
                 </div>
             </div>
      </div>
    </div>
  );
}

export default FifthPage;
