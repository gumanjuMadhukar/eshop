import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./details.css";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addCart, delCart } from "../../redux/action";

export const Details = () => {
  const [cartBtn, setCartBtn] =useState("Add To Cart")
  const [data, setData] = useState([]);
  const [product, setproduct] = useState([data]);
  const [loading, setLoading] = useState([false]);
  const { id } = useParams();

  const dispatch = useDispatch();

  const addProduct = (data) => {
    if(cartBtn === "Add To Cart"){
      dispatch(addCart(data));
      setCartBtn("Remove from Cart")
    }
    else{
      dispatch(delCart(data));
      setCartBtn("Add To Cart")
    }
    
  };

  let componentMounted = true;
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (componentMounted) {
        setData(await response.clone().json());
        setproduct(await response.json());
        setLoading(false);
        console.log(product);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const ShowProduct = () => {
    return (
      <div className="product-details">
        <div className="card h-100 p-4" key={id}>
          <Card className="product" style={{}}>
            <div className="row">
              <div className="col-md-6">
                <Card.Img
                  variant="top"
                  className="cardImg"
                  src={data.image}
                  alt={data.title}
                />
              </div>
              <div className="col-md-6">
                <Card.Body>
                  <Card.Title>{data.title}</Card.Title>
                  <Card.Text>{data.description}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>$ {data.price}</ListGroup.Item>
                  <ListGroup.Item>{data.category}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Link>
                    <button className="btn-outline-light" onClick={()=>addProduct(data)}>
                      {cartBtn}
                    </button>
                  </Link>
                  <Card.Link to={"/cart"} href="#">
                    See Cart
                  </Card.Link>
                </Card.Body>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="details">{<ShowProduct />}</div>
    </div>
  );
};
