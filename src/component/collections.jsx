import React from "react";
import { withRouter } from "react-router";
import { Card, Button } from "react-bootstrap";
import Header from "../component/Header";
import img from "../assest/img/img1.jpeg";
import img1 from "../assest/img/img2.png";
import img3 from "../assest/img/img3.png";
import img4 from "../assest/img/Sample-jpg-image-500kb.jpg";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { imgData } from "../redux/action/action";

const Collections = () => {
  const dispatch = useDispatch();
  const imgdata = useSelector((state) => {
    console.log("state image ", state.img.list);
    return state.img.list;
  });
  const [img, setImg] = useState([]);
  useEffect(() => {
    dispatch(imgData());
  }, img);

  return (
    <div className="container">
      <div className="row">
        <Header />
       
          {imgdata.map((val, index) => {
            if (index < 6) {
              return (
                  <div className="col-md-4">
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={val.url}
                    style={{ height: "180px" }}
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                     {val.title}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                  </Card>
                  </div>
              );
            } else {
              return null;
            }
          })}
        
        {/* <div className="col-sm-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={img} style={{ height: "180px" }} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-sm-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={img3} style={{ height: "180px" }} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-sm-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={img4} style={{ height: "180px" }} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={img1} style={{ height: "180px" }} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-sm-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={img} style={{ height: "180px" }} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-sm-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={img3} style={{ height: "180px" }} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-sm-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={img4} style={{ height: "180px" }} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div> */}
      </div>
    </div>
  );
};
export default Collections;
