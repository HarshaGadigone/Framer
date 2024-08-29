import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import img from "../../Images/arrow-icon.png";
import Nav from "./Nav.sass"
import img2 from "../../Images/logosaas.png";
import img3 from "../../Images/black-horizontal 1.png";
import cylinder from "../../Images/cylinder 1.png";
import vrutel from "../../Images/Visual.png";

const Nav = () => {
  return (
    <Container fluid>
      <Row>
        <Col
          style={{
            background: "black",
            height: "auto",
            textAlign: "center",
            paddingTop: "5px",
          }}
          sm={12}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div>
              <h1 className={styless.head}>
                This page is included in a free SaaS Website Kit.{" "}
              </h1>
            </div>
            <div>
              {" "}
              <h1
                className={styless.head12}
                style={{ color: "rgba(255, 255, 255, 1)" }}
              >
                View the complete Kit <img src={img} />{" "}
              </h1>
            </div>
                      
          </div>
        </Col>
      </Row>
      <Row>
        <Col style={{ height: "auto" }} sm={12}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <Container>
                <div style={{ display: "flex", marginTop: "5px" }}>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                    }}
                  >
                    {" "}
                    <img src={img2} width="100%" />{" "}
                  </div>
                  <div style={{ marginTop: "6px" }} className={styless.link1}>
                    <text className={styless.head2}> made by</text>
                    <img src={img3} style={{ marginLeft: "8px" }} />
                  </div>
                </div>
                         
              </Container>
            </div>
            <div>
              <Container>
                {["lg"].map((expand) => (
                  <Navbar key={expand} expand={expand} stt>
                    <Container fluid>
                      <Navbar.Brand href="#"> </Navbar.Brand>
                      <Navbar.Toggle
                        aria-controls={`offcanvasNavbar-expand-${expand}`}
                      />
                      <Navbar.Offcanvas
                        id={offcanvasNavbar-expand-${expand}}
                        style={{ height: "420px", color: "#00000099" }}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                      >
                        <Offcanvas.Header closeButton></Offcanvas.Header>

                        <Offcanvas.Body
                          style={{ width: "630px", justifyContent: "center" }}
                        >
                          <Nav variant="underline" defaultActiveKey="/home">
                            <Nav.Item>
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
                                <Button variant="dark"> Get for free</Button>
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
          </div>
        </Col>
      </Row>

      <Row>
        <Col sm={6} style={{ height: "auto", padding: "0px" }}>
          <Container>
            <Row>
              <Col sm={6} style={{ paddingTop: "70px" }}>
                <Container>
                  <div style={{ height: "auto" }}>
                    <text
                      style={{
                        borderRadius: "10px",
                        padding: "4px 13px 4px 13px",
                        border: "1px solid #2222221A",
                      }}
                    >
                      Version 2.0 is here
                    </text>
                  </div>
                </Container>
              </Col>
              <Col md={6} style={{ padding: "0", textAlign: " -webkit-right" }}>
                <div
                  style={{
                    width: "216px",
                    height: "197px",
                    color: "green",
                    position: "relative",
                    left: "35px",
                  }}
                >
                  <img className={styless.cylinder} src={cylinder} width="100%" height="auto" />
                </div>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col
          sm={6}
          style={{ height: "50px", background: "yellow", padding: "0" }}
        ></Col>
      </Row>
    </Container>
  );
};

export default Nav;