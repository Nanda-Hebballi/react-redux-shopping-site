import React from 'react'
import { Row,Col,Spinner } from 'react-bootstrap';
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
         {Object.keys(products).length === 0 ?
            <div>
                {/* <Spinner animation="border" role="status">
                    <span className=""></span>
                </Spinner> */}
                <h4>No Items Added to cart</h4>
            </div>
           : products.map((item,i) => (
             <Row className="cart-row">
              <div className="cart-col">
                {/* <Col xs={12} md={2} > */}
                  <Col md={1}></Col>
                    <Col md={3}><img src={item.image}/></Col>
                    <Col md={3}>
                    <div className="p-3">
                        <h6>{item.title}</h6>
                        <p>$ {item.price}</p>
                    </div>
                    </Col>
                    <Col md={3}>
                     <div className="p-3">
                        <h5>Price ${item.price} </h5>
                    </div>
                    <div>quantity  <input type="number" name="firstName" value={item.quantity}
                    onChange={(e)=>handleChange(item,e)} /></div>
                    <i class="fa fa-times remove-icon" onClick={()=>removeProduct(item)} aria-hidden="true"></i>
                    </Col>
                    <Col md={2}></Col>
                  </div>
                </Row>
             ))}
      </>
    )
}

export default Cart
