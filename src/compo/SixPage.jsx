import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import six from "./six.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function SixPage() {
  return (
    <div class=" container-fluid">
      {/*<h3><span><AiOutlineCheck /></span>SixPage</h3>*/}
      <div class="row">
        <div class=" col-12  ">
          <div className="container" id="vwvw">
          <div class="width: 100% height: 206px text-center">
                <br/><br/><br/><br/><br/><br/><br/>
                <h2>A more effective way to track progress</h2><br/>
                 <p class="width: 447px height: 46px ">Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website in just minutes with the set of free components for Framer.</p><br/>
                 </div> 
          </div>
        </div>
      </div>
      <br/><br/><br/><br/>
      <div class="row">
        <div class=" col-lg-4 col-12  ">
          <>
            {["Light"].map((variant) => (
              <Card
                bg={variant.toLowerCase()}
                key={variant}
                text={variant.toLowerCase() === "light" ? "dark" : "white"}
                style={{ width: "18rem" }}
                className="mb-2"
              >
                <Card.Header>free</Card.Header>
                <Card.Body>
                  <Card.Title>{variant} Card Title </Card.Title>
                  <Card.Text>
                    <div>
                      <h1>
                        $0 <span>/monthly</span>
                      </h1>
                    </div>
                    <br />
                    <Button variant="dark">Get started for free</Button>
                    <div>
                      <br />
                      <h7>
                        <span>
                          <AiOutlineCheck />
                        </span>
                        Up to 5 project members
                      </h7>
                      <br />
                      <br />
                      <h7>
                        <span>
                          <AiOutlineCheck />
                        </span>
                        Unlimited tasks and projects
                      </h7>
                      <br />
                      <br />
                      <h7>
                        <span>
                          <AiOutlineCheck />
                        </span>
                        2GB storage
                      </h7>
                      <br />
                      <br />
                      <h7>
                        <span>
                          <AiOutlineCheck />
                        </span>
                        Integrations
                      </h7>
                      <br />
                      <br />
                      <h7>
                        <span>
                          <AiOutlineCheck />
                        </span>
                        Basic support
                      </h7>
                      <br />
                      <br />
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </>
        </div>
        <div class="col-lg-4  col-12 ">
          <>
            {["Dark"].map((variant) => (
              <Card
                bg={variant.toLowerCase()}
                key={variant}
                text={variant.toLowerCase() === "light" ? "dark" : "white"}
                style={{ width: "18rem" }}
                className="mb-2"
              >
                <Card.Header>Pro</Card.Header>
                <Card.Body>
                  <Card.Title>{variant} Card Title </Card.Title>
                  <Card.Text>
                    <div>
                      <h1>
                        $9 <span>/monthly</span>
                      </h1>
                    </div>
                    <br />
                    <Button variant="dark">sing up now</Button>
                    <div>
                      <br />
                      <h7>
                        <span>
                          <AiOutlineCheck />
                        </span>
                        Up to 50 project members
                      </h7>
                      <br />
                      <br />
                      <h7>
                        <span>
                          <AiOutlineCheck />
                        </span>
                        Unlimited tasks and projects
                      </h7>
                      <br />
                      <br />
                      <h7>
                        <span>
                          <AiOutlineCheck />
                        </span>
                        50GB storage
                      </h7>
                      <br />
                      <br />
                      <h7>
                        <span>
                          <AiOutlineCheck />
                        </span>
                        Integrations
                      </h7>
                      <br />
                      <br />
                      <h7>
                        <span>
                          <AiOutlineCheck />
                        </span>
                        Priority support
                      </h7>
                      <br />
                      <br />
                      <h7>
                        <span>
                          <AiOutlineCheck />
                        </span>
                        Advanced support
                      </h7>
                      <br />
                      <br />
                      <h7>
                        <span>
                          <AiOutlineCheck />
                        </span>
                        Export support
                      </h7>
                      <br />
                      <br />
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </>
        </div>
        <div class="col-lg-4  col-12 ">
          <>
            {["Light"].map((variant) => (
              <Card
                bg={variant.toLowerCase()}
                key={variant}
                text={variant.toLowerCase() === "light" ? "dark" : "white"}
                style={{ width: "18rem" }}
                className="mb-2"
              >
                <Card.Header>Business</Card.Header>
                <Card.Body>
                  <Card.Title>{variant} Card Title </Card.Title>
                  <Card.Text>
                    <div>
                      <h1>
                        $19 <span>/monthly</span>
                      </h1>
                    </div>
                    <br />
                    <Button variant="dark">Sign up now</Button>
                    <div>
                      <br />
                      <h7>
                        <span>
                          <AiOutlineCheck />
                        </span>
                        Up to 5 project members
                      </h7>
                      <br />
                      <br />
                      <h7>
                        <span>
                          <AiOutlineCheck />
                        </span>
                        Unlimited tasks and projects
                      </h7>
                      <br />
                      <br />
                      <h7>
                        <span>
                          <AiOutlineCheck />
                        </span>
                        200GB storage
                      </h7>
                      <br />
                      <br />
                      <h7>
                        <span>
                          <AiOutlineCheck />
                        </span>
                        Integrations
                      </h7>
                      <br />
                      <br />
                      <h7>
                        <span>
                          <AiOutlineCheck />
                        </span>
                        Dedicated account manager
                      </h7>
                      <br />
                      <br />
                      <h7>
                        <span>
                          <AiOutlineCheck />
                        </span>
                        Custom fields
                      </h7>
                      <br />
                      <br />
                      <h7>
                        <span>
                          <AiOutlineCheck />
                        </span>
                        Advanced analytics
                      </h7>
                      <br />
                      <br />
                      <h7>
                        <span>
                          <AiOutlineCheck />
                        </span>
                        Export capabilities
                      </h7>
                      <br />
                      <br />
                      <h7>
                        <span>
                          <AiOutlineCheck />
                        </span>
                        API access
                      </h7>
                      <br />
                      <br />
                      <h7>
                        <span>
                          <AiOutlineCheck />
                        </span>
                        Advanced security features
                      </h7>
                      <br />
                      <br />
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </>
        </div>
      </div>
    </div>
  );
}

export default SixPage;
