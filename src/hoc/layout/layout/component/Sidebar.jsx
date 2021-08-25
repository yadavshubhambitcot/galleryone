import {Nav} from "react-bootstrap";
import { withRouter } from "react-router";
import { Card, Button } from "react-bootstrap"



const Side = props => {
   

    return (
      <>
        <Nav
          className="col-md-12 d-none d-md-block bg-light sidebar"
          activeKey="/home"
        >
          <div className="sidebar-sticky"></div>
          <h3>Sidebar</h3>
          <Nav.Item>
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/gallery">Gallery</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/contact">contact us</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Own gallery</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                            <Button  variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Nav.Item>
        </Nav>
      </>
    );
  };
  const Sidebar = withRouter(Side);
  export default Sidebar