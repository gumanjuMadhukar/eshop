import React, { useState} from 'react'
import { useParams } from 'react-router-dom';
import { Row, Col, Table, Button} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, decreaseCart, delCart } from "../../redux/action";
const Cart = () => {
  const [product, setProduct] = useState([]);
  const state = useSelector((state)=> state.handleCart)
  const dispatch = useDispatch();
  const addProduct =()=>{
    dispatch(addCart(product))

  }
  const subProduct =() =>{
    dispatch(decreaseCart(product))
  }
  const delProduct =() =>{
    dispatch(delCart(product))
  }
  return (
    <div>
      
      <Row className="justify-content-center">
                <Table responsive="sm" striped bordered hover className="mb-5">
                    <tbody>
                        {state.map((item)=>{
                            return(
                                <tr key={state.id} >
                                    <td>
                                        <div style={{ background: 'white', height: '8rem', overflow: 'hidden', display: 'flex',
                                        justifyContent: 'center', alignItems: 'center' }}>
                                            <div style={{ padding: '.5rem'}}>
                                                <img src={item.image} style={{ width: '4rem'}} alt={item.title} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h6 style={{ whiteSpace: 'nowrap', width: '14rem', overflow: 'hidden', textOverFlow: 'ellipsis'}}>
                                            {item.title}
                                        </h6>
                                    </td>
                                    <td>Rs. {item.price}</td>
                                    <td>Quantity ({state.length})</td>
                                    <td>
                                        <Button onClick={()=> subProduct(item.id)} className="ms-2">-</Button>
                                        <Button onClick={()=> addProduct(item.id)} className="ms-2">+</Button>
                                        <Button variant="danger" onClick={()=> delProduct(item.id)} className="ms-2">Remove</Button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
                {/* {!isEmpty &&
                    <Row 
                        style={{ position: 'fixed', bottom: 0}}
                        className={`${theme? 'bg-light-black text-light' : 'bg-light text-balck'} justify-content-center w-100`}
                    >
                        <Col className="py-2">
                            <h4>Total Price: Rs. {cartTotal}</h4>
                        </Col>
                        <Col className="p-0" md={4}>
                            <Button variant="danger"
                                className="m-2"
                                onClick={()=> emptyCart()}
                            >
                                <BsCartX size="1.7rem" />
                                Clear Cart
                            </Button>
                            <Button variant="success"
                                className="m-2"
                            >
                                <BsCartCheck size="1.7rem" />
                                Clear Cart
                            </Button>
                        </Col>
                    </Row>} */}
            </Row>
    </div>
  )
}

export default Cart;