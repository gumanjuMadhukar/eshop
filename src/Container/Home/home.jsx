import React from "react";
import { Container} from "react-bootstrap";
import Products from "../../Components/products/products";

import './home.css'
const Home = () => {
  // const [product, setData] = useState(null);
  // const fetchProduct = async () => {
  //   const response = await fetch(`https://fakestoreapi.com/products/`);
  //   // const response = await fetch(`https://api.escuelajs.co/api/v1/categories`)

  //   const data = await response.json();
  //   setData(data);
  //   console.log(data);
  // };
  // useEffect(() => {
  //   fetchProduct();
  // }, [product]);
  return (
    <div className="shop">
      <div className="shopTitle">
        <Container>
         <Products/>
          {/* <Row>
            
            {product && product.length > 0
              ? product.map((item, index) => {
                  return <CardDetails key={index} data={item} />;
                })
              : "Loading ...."}
          </Row> */}
          
        </Container>
      </div>
    </div>
  );
};

export default Home;
