import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from "react-bootstrap/Offcanvas";
import nav from '../compo/nav.css'

function BasicExample() {
  return (
    <div>
              <Container>
                {["lg"].map((expand) => (
                  <Navbar key={expand} expand={expand} stt  id='nav1'>
                    <Container fluid  >
                      <Navbar.Brand href="#"> </Navbar.Brand>
                      <Navbar.Toggle
                        aria-controls={`offcanvasNavbar-expand-${expand}`}
                      />
                      <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        style={{ height: "420px", color: "#00000099" }}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                      >
                        <Offcanvas.Header closeButton></Offcanvas.Header>

                        <Offcanvas.Body
                          style={{ width: "630px", justifyContent: "center" }}
                        >
                          <Nav variant="underline" defaultActiveKey="/home">
                            <Nav.Item  >
                              <Nav.Link
                                href="/talent"
                                style={{
                                  fontStyle: "Poppins",
                                  width: "95px",
                                  border: "none",
                                }}
                              >
                                {" "}
                                About{" "}
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link
                                href="/recruiter"
                                style={{ width: "95px", border: "none" }}
                              >
                                {" "}
                                Features{" "}
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link
                                eventKey="link-1"
                                style={{
                                  fontWeight: "400",
                                  width: "95px",
                                  border: "none",
                                }}
                              >
                                {" "}
                                Customers{" "}
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link
                                style={{ width: "95px", border: "none" }}
                              >
                                Updates
                              </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                              <Nav.Link
                                style={{ width: "50px", border: "none" }}
                              >
                                Help
                              </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                              <Nav.Link
                                style={{
                                  width: "123px",
                                  padding: "0px",
                                  border: "none",
                                }}
                              >
                                
                              </Nav.Link>
                            </Nav.Item>
                          </Nav>
                        </Offcanvas.Body>
                      </Navbar.Offcanvas>
                    </Container>
                  </Navbar>
                ))}
              </Container>
            </div>
  );
}

export default BasicExample;