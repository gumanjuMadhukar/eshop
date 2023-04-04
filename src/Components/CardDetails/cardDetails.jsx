import React from "react";
import { Link } from "react-router-dom";
import { img_300, img_not_available } from "../../Config";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const CardDetails = ({ data, productDetails }) => {
  const id = data.id;
  const category = data.category
    ? data.category
    : data.type
    ? data.type
    : category;

  const ImageURL = data.image;
  const title = data.title || data.name;

  const getProducts = () => {
    <div className="buttons d-flex justify-content-center mb-5">
      <button className="btn btn-outline-dark m-2">ALL</button>
      <button className="btn btn-outline-dark m-2">Mens Clothing</button>
      <button className="btn btn-outline-dark m-2">Womens CLothing</button>
      <button className="btn btn-outline-dark m-2">Jwellwry</button>
      <button className="btn btn-outline-dark m-2">Electronics</button>
    </div>;
  };

  return (
    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 ">
      <Link to={`details/${id}`}>
        <div className="productCard">
          <div className="card h-100 p-4">
            <Card className="product" style={{}}>
              <Card.Img
                variant="top"
                className="cardImg"
                src={ImageURL}
                alt={title}
              />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{data.description}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>$ {data.price}</ListGroup.Item>
                <ListGroup.Item>{data.category}</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardDetails;
