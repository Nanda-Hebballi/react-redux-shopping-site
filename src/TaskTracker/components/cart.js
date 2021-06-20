import React from 'react'
import { Row,Col,Spinner,Card } from 'react-bootstrap';
import  './cart.css';
import {useSelector,useDispatch} from 'react-redux';
import {setQuantity,removecartproduct} from './../redux/action'

function Cart() {
    const products = useSelector(state => state.carts.cartProducts)
    const total = useSelector(state => state.carts.total)
    const dispatch = useDispatch()

    function handleChange(item,e) {
        dispatch(setQuantity(item,parseInt(e.target.value)))
    }

    function removeProduct(item){
        dispatch(removecartproduct(item));
    }

    return (
      <>
        <Row className="mb-2">
            <Col md={12}>
               <h3> Total Price : $ {total}</h3>
            </Col>
        </Row>
        <Row className="cart-row">
         {Object.keys(products).length === 0 ?
            <div>
                {/* <Spinner animation="border" role="status">
                    <span className=""></span>
                </Spinner> */}
                <h4>No Items Added to cart</h4>
            </div>
           : products.map((item,i) => (
              <div className="col-md-4">
                {/* <Col xs={12} md={2} > */}
                  <Card className="cart-col">
                      <Card.Img variant="top" src={item.image} />
                      <Card.Body>
                          <Card.Title>
                            <p>{item.title}</p>
                            <p>Price ${item.price} </p>
                          </Card.Title>
                           <Card.Text>
                           <div>quantity  <input type="number" name="firstName" value={item.quantity}
                           onChange={(e)=>handleChange(item,e)} /></div>
                           <i class="fa fa-times remove-icon" onClick={()=>removeProduct(item)} aria-hidden="true"></i>                        </Card.Text>
                      </Card.Body>
                  </Card>
                  </div>
             ))}
        </Row>
      </>
    )
}

export default Cart
