import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import "./product.css";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([data]);
  const [loading, setLoading] = useState([false]);

  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products`);
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return <>Loading...</>;
  };
  const Product = filter.map((product) => {
    const id = product.id;
    const cat = product.category;
    return (
      <div className="product-container">
        {/* <Link to={`${cat}/${id}`}>
          <div className="card">
            <Card className="product" key={product.id} style={{}}>
              <Card.Img
                variant="top"
                className="cardImg"
                src={product.image}
                alt={product.title}
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.desc}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group">
                <ListGroup.Item>$ {product.price}</ListGroup.Item>
                <ListGroup.Item>{product.category}</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link to={"/cart"}>Add to Cart</Card.Link>
                <Card.Link href="#">Buy Now</Card.Link>
              </Card.Body>
            </Card>
          </div>
        </Link> */}
        
        <div className="card">
          <Card className="product" key={product.id} style={{}}>
            <Card.Img
              variant="top"
              className="cardImg"
              src={product.image}
              alt={product.title}
            />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              {/* <Card.Text>{product.description}</Card.Text> */}
            </Card.Body>
            <ListGroup className="list-group">
              <ListGroup.Item>$ {product.price}</ListGroup.Item>
              <ListGroup.Item>{product.category}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Link >
                Add to Cart
              </Link>
              <Link to={`/details/${id}`}>Buy Now</Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  });
  const filterProduct = (category) => {
    const updatedList = data.filter((x) => x.category === category);
    setFilter(updatedList);
  };
  const ShowProducts = () => {
    return (
      <div>
        <div className="buttons d-flex justify-content-center mb-5">
          <button
            className="btn btn-outline-light m-2"
            onClick={() => setFilter(data)}
          >
            ALL
          </button>
          <button
            className="btn btn-outline-light m-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Mens Clothing
          </button>
          <button
            className="btn btn-outline-light m-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Womens CLothing
          </button>
          <button
            className="btn btn-outline-light m-2"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-light m-2"
            onClick={() => filterProduct("electronics")}
          >
            Electronics
          </button>
        </div>
        <div className="productCard">{Product}</div>
      </div>
    );
  };

  return (
    <div>
      <div className="container">
        <div className="row title">
          <div className="col-12">
            <h1>Products</h1>
          </div>
        </div>
        <div className="justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
