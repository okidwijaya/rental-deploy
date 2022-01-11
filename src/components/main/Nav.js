import React from "react"; //{useState, useEffect }
import dot from "../../images/dot.png";
import profileImage from "../../images/edward.png";
import "../../style.css";
import { useHistory } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  Dropdown,
  ListGroup,
  Card,
} from "react-bootstrap";

const Navigation = (props) => {
  const history = useHistory(props.history);

  const handleLogout = () => {
    localStorage.clear();
    history.push("/login");
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <img src={dot} width="30" height="30" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="align-items-canter">
            <Nav.Link className="nav-item" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="nav-item" href="#link">
              Vehicle
            </Nav.Link>
            <Nav.Link className="nav-item" href="#link">
              Story
            </Nav.Link>
            <Nav.Link className="nav-item" href="#link">
              About
            </Nav.Link>
            <ListGroup horizontal>
              <Nav.Link as="li" className="nav-item chat" href="#link">
                <Dropdown className="d-inline">
                  <Dropdown.Toggle
                    id="dropdown-autoclose-true"
                    className="btn btn-sm btn-outline-warning btn-message-profile"
                  >
                    <i className="bi bi-envelope"></i>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="justify-content-center">
                    <Dropdown.Item href="#">
                      <Card>
                        <Card.Body>
                          <ListGroup horizontal>
                            <ListGroup.Item>
                              <Container>
                                <Card.Title>User 1</Card.Title>
                                <Card.Text>
                                  Some quick example text to <br />
                                  build on the card title and make up the
                                  <br /> bulk of the card's content.
                                </Card.Text>
                              </Container>
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <Container>
                                <Card.Subtitle className="mb-2 text-muted">
                                  Just now
                                </Card.Subtitle>
                                <Card.Text>1</Card.Text>
                              </Container>
                            </ListGroup.Item>
                          </ListGroup>
                        </Card.Body>
                      </Card>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Link>

              <Nav.Link as="li" className="nav-item profile-dropdown">
                <Dropdown className="d-inline">
                  <Dropdown.Toggle
                    id="dropdown-basic-button"
                    type="button"
                    className="profile-btn-picture"
                  >
                    <img
                      src={profileImage}
                      className="profile-btn-image"
                      alt="profile-thumbnail"
                    />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#">Edit Profile</Dropdown.Item>
                    <Dropdown.Item href="#">Help</Dropdown.Item>
                    <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Link>
            </ListGroup>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
